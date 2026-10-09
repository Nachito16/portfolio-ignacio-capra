import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 keeps UI text in screenshots crisp; 75 is the default for everything else.
    qualities: [75, 90],
  },
};

export default nextConfig;
