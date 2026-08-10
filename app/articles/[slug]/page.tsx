import type { Metadata } from 'next';
import { fetchQuery } from 'convex/nextjs';
import { api } from '@/convex/_generated/api';
import { excerpt } from '@/lib/articles';
import ArticleClient from './ArticleClient';

const BASE_URL = 'https://clint-bor.vercel.app';
// Shown when an article has no image of its own.
const FALLBACK_IMAGE = '/assets/web-icon.png';

// Normalize (a trailing slash breaks the "//api/..." request URL).
const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL?.trim().replace(
  /\/+$/,
  ''
);

async function getArticle(slug: string) {
  if (!CONVEX_URL) return null;
  try {
    return await fetchQuery(
      api.articles.getBySlug,
      { slug },
      { url: CONVEX_URL }
    );
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: 'Marginalia — Clinton Kibet',
      description: 'Notes in the margins.',
      openGraph: {
        title: 'Marginalia — Clinton Kibet',
        description: 'Notes in the margins.',
        images: [{ url: FALLBACK_IMAGE }],
      },
      twitter: { card: 'summary', images: [FALLBACK_IMAGE] },
    };
  }

  const description = excerpt(article.body, 160);
  const url = `${BASE_URL}/articles/${slug}`;
  const hasImage = !!article.imageUrl;
  const imageUrl = article.imageUrl ?? FALLBACK_IMAGE;

  return {
    title: `${article.title} — Marginalia`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description,
      url,
      type: 'article',
      images: [
        {
          url: imageUrl,
          alt: article.title,
          ...(hasImage && article.imageWidth && article.imageHeight
            ? { width: article.imageWidth, height: article.imageHeight }
            : {}),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticleClient slug={slug} />;
}
