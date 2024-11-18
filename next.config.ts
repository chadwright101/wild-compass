import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [425, 800, 1400],
    imageSizes: [425, 800, 1400],
  },
};

export default nextConfig;
