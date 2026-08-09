'use client';

import { ReactNode } from 'react';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

// Trim whitespace and any trailing slash — a trailing "/" makes the client
// build a malformed "//api/..." URL and every query silently fails.
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL?.trim().replace(
  /\/+$/,
  ''
);

const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  // If Convex isn't configured yet, render children anyway so the rest of
  // the site keeps working (the Marginalia/Admin pages handle the null case).
  if (!convex) return <>{children}</>;
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
