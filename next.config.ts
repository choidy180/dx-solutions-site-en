import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 2592000 },
};
export default nextConfig;
