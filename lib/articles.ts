// Shared shape for a published article as returned by convex/articles.ts.
export type Article = {
  _id: string;
  _creationTime: number;
  title: string;
  body: string;
  slug: string;
  published: boolean;
  publishedAt: number;
  updatedAt: number;
  imageUrl: string | null;
  imageWidth?: number;
  imageHeight?: number;
};

// Convex is only wired up once NEXT_PUBLIC_CONVEX_URL exists. Pages read this
// to avoid mounting query hooks before a client is available.
export const convexConfigured = !!process.env.NEXT_PUBLIC_CONVEX_URL;

export function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Split plain text on blank lines into paragraphs for rendering.
export function toParagraphs(body: string): string[] {
  return body
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function excerpt(body: string, max = 220): string {
  const flat = body.replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  return flat.slice(0, max).replace(/\s+\S*$/, '') + '…';
}
