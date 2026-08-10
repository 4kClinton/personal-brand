import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Allow next/image to optimize article images served from Convex storage.
    remotePatterns: [{ protocol: 'https', hostname: '**.convex.cloud' }],
  },
};

export default nextConfig;
