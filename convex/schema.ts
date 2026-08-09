import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  articles: defineTable({
    title: v.string(),
    // Plain text. Blank lines separate paragraphs when rendered.
    body: v.string(),
    slug: v.string(),
    // Optional illustration for the entry.
    imageId: v.optional(v.id('_storage')),
    published: v.boolean(),
    publishedAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_slug', ['slug'])
    .index('by_published', ['published', 'publishedAt']),
});
