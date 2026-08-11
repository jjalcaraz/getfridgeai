import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:key.txt",
        destination: "/api/indexnow-key?key=:key",
      },
    ];
  },
};

export default nextConfig;
