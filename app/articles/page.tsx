'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Nav from '@/components/Nav';
import { Article, convexConfigured, excerpt, formatDate } from '@/lib/articles';

function romanIndex(n: number): string {
  // Small helper for the folio-style numbering on each leaf.
  const map: [number, string][] = [
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let out = '';
  let x = n;
  for (const [val, sym] of map) {
    while (x >= val) {
      out += sym;
      x -= val;
    }
  }
  return out || 'I';
}

function Leaf({ article, n }: { article: Article; n: number }) {
  return (
    <a className="leaf" href={`/articles/${article.slug}`}>
      {article.imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="leaf__thumb" src={article.imageUrl} alt="" />
      )}
      <div className="leaf__body">
        <div className="leaf__num">
          <span>Leaf {romanIndex(n)}</span>
          <span className="pip" />
          <span>{formatDate(article.publishedAt)}</span>
        </div>
        <h2 className="leaf__title">{article.title}</h2>
        <p className="leaf__excerpt">{excerpt(article.body)}</p>
        <span className="leaf__more">
          Read the note <span className="arrow" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}

function MarginaliaList() {
  const articles = useQuery(api.articles.list);

  if (articles === undefined) {
    return <p className="leaves__state">Turning the pages…</p>;
  }
  if (articles.length === 0) {
    return (
      <p className="leaves__state">
        The margins are still blank. First note, coming soon.
      </p>
    );
  }
  return (
    <div className="leaves__list">
      {articles.map((a, i) => (
        <Leaf key={a._id} article={a as Article} n={articles.length - i} />
      ))}
    </div>
  );
}

export default function MarginaliaPage() {
  return (
    <>
      <Nav />
      <main className="leaves">
        <header className="section-head">
          <div className="section-head__index">
            <span className="roman">VI</span>
            <span>Marginalia</span>
          </div>
          <div>
            <h1 className="section-head__title">
              Notes in the <em>margins.</em>
            </h1>
            <p className="section-head__lede">
              Loose thoughts, half-formed theories, and things worth writing
              down before they escape. A working notebook, kept in public.
            </p>
          </div>
        </header>

        {convexConfigured ? (
          <MarginaliaList />
        ) : (
          <p className="leaves__state">
            The notebook isn&apos;t connected yet. Once Convex is configured it
            will fill in here.
          </p>
        )}
      </main>

      <footer className="leaves__foot">
        <a href="/">❦ Return to the codex</a>
      </footer>
    </>
  );
}
