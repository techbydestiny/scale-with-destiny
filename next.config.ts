import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Let Next.js optimize images (better performance)
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Ensure proper static file serving
  distDir: '.next',
  
  // Compress for better performance
  compress: true,
  
  // Remove the unoptimized: true line completely
};

export default nextConfig;