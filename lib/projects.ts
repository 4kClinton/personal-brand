export type Project = {
  folio: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  sector: string;
  stack: string[];
  url: string;
  diagram: 'nima' | 'swyft' | 'monty';
};

export const projects: Project[] = [
  {
    folio: 'III.i',
    name: 'Nima AI',
    tagline: '— virtual try-on for fashion.',
    description:
      'AI-powered virtual try-on for African fashion brands. Shoppers see themselves in the garment before they buy. FashionCLIP embeddings, pgvector matching, full Shopify integration.',
    role: 'Founding CTO',
    year: '2024 — present',
    sector: 'Fashion · AI',
    stack: ['Next.js', 'Convex', 'FashionCLIP', 'pgvector'],
    url: 'https://www.shopnima.ai/',
    diagram: 'nima',
  },
  {
    folio: 'III.ii',
    name: 'Swyft',
    tagline: '— logistics, ride-hailing, the African road.',
    description:
      'Driver and rider apps for a Kenyan-built mobility company. Real-time matching, payments via M-Pesa, and a driver experience built for the conditions actual drivers work in.',
    role: 'Founder · CTO',
    year: '2023 — present',
    sector: 'Mobility · Logistics',
    stack: ['React Native', 'Expo', 'Node', 'M-Pesa'],
    url: 'https://swyft-landing-page.vercel.app/',
    diagram: 'swyft',
  },
  {
    folio: 'III.iii',
    name: 'Monty',
    tagline: '— the studio, for social media managers.',
    description:
      'A creative tool built specifically for social media managers — what Canva is to designers, what Cursor is to developers. Faster planning, faster shipping, less context switching.',
    role: 'Founder',
    year: '2025 — present',
    sector: 'Creative · SaaS',
    stack: ['Next.js', 'AI', 'Workflow'],
    url: 'https://monty-studios.vercel.app/',
    diagram: 'monty',
  },
];
