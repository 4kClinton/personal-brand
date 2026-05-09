import type { Metadata } from 'next';
import { Cormorant_Garamond, EB_Garamond, Caveat, Cinzel, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hand',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-stamp',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: '/assets/web-icon.png',
    apple: '/assets/web-icon.png',
  },
  title: 'Clinton Kibet — Codex of a Polymath',
  description:
    'Software engineer, designer, draughtsman, painter, and maker. A Nairobi polymath. Building Africa-first products and small machines in the back yard.',
  metadataBase: new URL('https://clintonkibet.com'),
  openGraph: {
    title: 'Clinton Kibet — Codex of a Polymath',
    description:
      'Software engineer, designer, draughtsman, painter, and maker. A Nairobi polymath.',
    images: ['/assets/portrait.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinton Kibet — Codex of a Polymath',
    description:
      'Software engineer, designer, draughtsman, painter, and maker. A Nairobi polymath.',
    images: ['/assets/portrait.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${ebGaramond.variable} ${caveat.variable} ${cinzel.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
