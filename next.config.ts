import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable optimization for production
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  // Ensure static files are properly served
  output: 'standalone', // This helps with production deployments
};

export default nextConfig;