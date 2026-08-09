import { mutation, query } from './_generated/server';
import { v } from 'convex/values';
import { Doc, Id } from './_generated/dataModel';

/* ------------------------------------------------------------------ *
 * Admin gate
 * ------------------------------------------------------------------ *
 * A single shared secret, set in the Convex dashboard as the
 * ADMIN_KEY environment variable. Every write passes the key and it
 * is verified here on the server — the client never gets write access
 * on its own.
 * ------------------------------------------------------------------ */
function assertAdmin(key: string) {
  const expected = process.env.ADMIN_KEY;
  if (!expected) {
    throw new Error(
      'ADMIN_KEY is not configured on the Convex deployment. Run `npx convex env set ADMIN_KEY <your-password>`.'
    );
  }
  if (key !== expected) {
    throw new Error('Unauthorized — wrong admin key.');
  }
}

function slugify(title: string): string {
  const base = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
  const suffix = Math.random().toString(36).slice(2, 7);
  return base ? `${base}-${suffix}` : suffix;
}

type PublicArticle = Omit<Doc<'articles'>, 'imageId'> & {
  imageUrl: string | null;
};

async function withImageUrl(
  ctx: { storage: { getUrl: (id: Id<'_storage'>) => Promise<string | null> } },
  doc: Doc<'articles'>
): Promise<PublicArticle> {
  const { imageId, ...rest } = doc;
  const imageUrl = imageId ? await ctx.storage.getUrl(imageId) : null;
  return { ...rest, imageUrl };
}

/* ---------------------------------- reads --------------------------------- */

// Published entries, newest first — for the public Marginalia page.
export const list = query({
  args: {},
  handler: async (ctx) => {
    const docs = await ctx.db
      .query('articles')
      .withIndex('by_published', (q) => q.eq('published', true))
      .order('desc')
      .collect();
    return Promise.all(docs.map((d) => withImageUrl(ctx, d)));
  },
});

// A single published entry by slug.
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    const doc = await ctx.db
      .query('articles')
      .withIndex('by_slug', (q) => q.eq('slug', slug))
      .unique();
    if (!doc || !doc.published) return null;
    return withImageUrl(ctx, doc);
  },
});

// Everything (drafts included) — for the admin dashboard. Requires the key.
export const listAll = query({
  args: { key: v.string() },
  handler: async (ctx, { key }) => {
    assertAdmin(key);
    const docs = await ctx.db.query('articles').order('desc').collect();
    return Promise.all(docs.map((d) => withImageUrl(ctx, d)));
  },
});

// Cheap way for the admin page to validate the key on login.
export const checkKey = query({
  args: { key: v.string() },
  handler: async (_ctx, { key }) => {
    return !!process.env.ADMIN_KEY && key === process.env.ADMIN_KEY;
  },
});

/* --------------------------------- writes --------------------------------- */

export const generateUploadUrl = mutation({
  args: { key: v.string() },
  handler: async (ctx, { key }) => {
    assertAdmin(key);
    return ctx.storage.generateUploadUrl();
  },
});

export const create = mutation({
  args: {
    key: v.string(),
    title: v.string(),
    body: v.string(),
    imageId: v.optional(v.id('_storage')),
    published: v.boolean(),
  },
  handler: async (ctx, { key, title, body, imageId, published }) => {
    assertAdmin(key);
    const now = Date.now();
    return ctx.db.insert('articles', {
      title: title.trim(),
      body: body.trim(),
      slug: slugify(title),
      imageId,
      published,
      publishedAt: now,
      updatedAt: now,
    });
  },
});

export const update = mutation({
  args: {
    key: v.string(),
    id: v.id('articles'),
    title: v.string(),
    body: v.string(),
    imageId: v.optional(v.id('_storage')),
    // Set true to detach (and delete) the current image without adding a new one.
    removeImage: v.optional(v.boolean()),
    published: v.boolean(),
  },
  handler: async (
    ctx,
    { key, id, title, body, imageId, removeImage, published }
  ) => {
    assertAdmin(key);
    const existing = await ctx.db.get(id);

    const patch: Partial<Doc<'articles'>> = {
      title: title.trim(),
      body: body.trim(),
      published,
      updatedAt: Date.now(),
    };

    if (imageId) {
      // Replacing the image — drop the old file if it changed.
      if (existing?.imageId && existing.imageId !== imageId) {
        await ctx.storage.delete(existing.imageId);
      }
      patch.imageId = imageId;
    } else if (removeImage) {
      if (existing?.imageId) await ctx.storage.delete(existing.imageId);
      patch.imageId = undefined;
    }

    await ctx.db.patch(id, patch);
  },
});

export const remove = mutation({
  args: { key: v.string(), id: v.id('articles') },
  handler: async (ctx, { key, id }) => {
    assertAdmin(key);
    const doc = await ctx.db.get(id);
    if (doc?.imageId) await ctx.storage.delete(doc.imageId);
    await ctx.db.delete(id);
  },
});
