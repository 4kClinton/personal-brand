'use client';

import { useParams } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Nav from '@/components/Nav';
import {
  Article,
  convexConfigured,
  formatDate,
  toParagraphs,
} from '@/lib/articles';

function ArticleView({ slug }: { slug: string }) {
  const article = useQuery(api.articles.getBySlug, { slug });

  if (article === undefined) {
    return <p className="leaves__state">Turning the page…</p>;
  }
  if (article === null) {
    return (
      <div className="note__missing">
        <p className="leaves__state">This note could not be found.</p>
        <a className="btn btn--ghost" href="/articles">
          <span className="arrow" aria-hidden="true" />
          Back to Marginalia
        </a>
      </div>
    );
  }

  const a = article as Article;
  return (
    <article className="note">
      <div className="note__meta">
        <span className="roman">Marginalia</span>
        <span className="pip" />
        <span>{formatDate(a.publishedAt)}</span>
      </div>
      <h1 className="note__title">{a.title}</h1>

      {a.imageUrl && (
        <figure className="note__figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={a.imageUrl} alt="" />
        </figure>
      )}

      <div className="note__body">
        {toParagraphs(a.body).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="note__sign">
        <span className="signature">Clinton Kibet</span>
      </div>
    </article>
  );
}

export default function NotePage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? '';

  return (
    <>
      <Nav />
      <main className="note-page">
        <a className="note__back" href="/articles">
          ← Marginalia
        </a>
        {convexConfigured ? (
          <ArticleView slug={slug} />
        ) : (
          <p className="leaves__state">The notebook isn&apos;t connected yet.</p>
        )}
      </main>

      <footer className="leaves__foot">
        <a href="/">❦ Return to the codex</a>
      </footer>
    </>
  );
}
