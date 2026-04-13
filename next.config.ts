import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // This fixes production image issues
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;