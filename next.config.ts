import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",   // ⭐ สำคัญสำหรับ Docker

  reactCompiler: true,
  cacheComponents: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.codingthailand.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.your-store.com",
        port: "",
        pathname: "/products/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
