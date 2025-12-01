import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'offices.hirogeru.net',
      },
    ],
  },
};

export default nextConfig;
