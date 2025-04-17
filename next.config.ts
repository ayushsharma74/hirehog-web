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
        destination: "https://hirehog-backend.onrender.com/api/:path*", // proxy to backend
      },
    ];
  },
};

export default nextConfig;
