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

const BASE_URL = 'https://clint-bor.vercel.app';

export const metadata: Metadata = {
  icons: {
    icon: '/assets/web-icon.png',
    apple: '/assets/web-icon.png',
  },
  metadataBase: new URL(BASE_URL),
  title: 'Clinton Kibet — Codex of a Polymath',
  description:
    'Clinton Kibet — software engineer, designer, draughtsman, painter, and maker based in Nairobi. Founding CTO of Nima AI and Swyft. Building Africa-first products.',
  keywords: [
    'Clinton Kibet',
    'Clinton Bor',
    'software engineer Nairobi',
    'Kenyan developer',
    'Nima AI',
    'Swyft',
    'Africa tech',
    'polymath',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Clinton Kibet — Codex of a Polymath, Nairobi',
    description:
      'Clinton Kibet — software engineer, designer, draughtsman, painter, and maker based in Nairobi. Founding CTO of Nima AI and Swyft.',
    url: BASE_URL,
    siteName: 'Clinton Kibet',
    images: [{ url: '/assets/portrait.png', width: 1200, height: 630, alt: 'Clinton Kibet' }],
    type: 'website',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinton Kibet — Codex of a Polymath, Nairobi',
    description:
      'Clinton Kibet — software engineer, designer, draughtsman, painter, and maker based in Nairobi.',
    images: ['/assets/portrait.png'],
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Clinton Kibet',
  alternateName: 'Clinton Bor',
  url: 'https://clint-bor.vercel.app',
  image: 'https://clint-bor.vercel.app/assets/portrait.png',
  jobTitle: 'Software Engineer',
  description:
    'Software engineer, designer, draughtsman, painter, and maker based in Nairobi, Kenya. Founding CTO of Nima AI and Swyft. Building Africa-first products.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    addressCountry: 'KE',
  },
  sameAs: ['https://www.instagram.com/clint_bor/'],
  knowsAbout: [
    'Software Engineering',
    'Artificial Intelligence',
    'Full-Stack Development',
    'Graphic Design',
    'React Native',
    'Next.js',
    'Mobile App Development',
    'AI Agents',
  ],
  founder: [
    {
      '@type': 'Organization',
      name: 'Nima AI',
      url: 'https://www.shopnima.ai/',
      description: 'AI-powered virtual try-on for African fashion brands.',
      foundingLocation: { '@type': 'Place', name: 'Nairobi, Kenya' },
    },
    {
      '@type': 'Organization',
      name: 'Swyft',
      url: 'https://swyft-landing-page.vercel.app/',
      description: 'Kenyan-built mobility and logistics platform.',
      foundingLocation: { '@type': 'Place', name: 'Nairobi, Kenya' },
    },
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Nima AI',
    url: 'https://www.shopnima.ai/',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
