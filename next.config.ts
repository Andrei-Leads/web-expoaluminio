import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  transpilePackages: ["@andrei-leads/core"],
  images: {
    // Solo WebP: el AVIF de Next a calidad 75 emborronaba las fotos (sobre todo las de móvil de la ficha).
    formats: ["image/webp"],
    qualities: [85, 90],
  },

  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
