import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  experimental: {
    serverComponentsHmrCache: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thctpckilrxnmiwoaxyu.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://roadsidecoder.created.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
