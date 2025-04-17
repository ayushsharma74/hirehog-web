import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      },
  ]
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",        // match all requests to /api/*
        destination: "http://localhost:3000/api/:path*", // proxy to backend
      },
    ];
  },
};

export default nextConfig;
