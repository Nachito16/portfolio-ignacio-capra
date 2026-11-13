import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 keeps UI text in screenshots crisp; 75 is the default for everything else.
    qualities: [75, 90],
  },
  experimental: {
    // The root layout is under app/[locale]; app/global-not-found.tsx renders the site-wide 404.
    globalNotFound: true,
  },
};

export default nextConfig;
