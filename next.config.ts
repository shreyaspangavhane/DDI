import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "img.icons8.com",
      "images.unsplash.com",
      "zolostays.com",
      "www.issuewire.com",
      "www.aimsindia.com",
      "www.kauveryhospital.com",
      "www.apollohospitals.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", 
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Fix for Tesseract.js in server-side
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
      
      // Ignore worker files in server-side builds
      config.externals = config.externals || [];
      config.externals.push({
        'worker-script': 'commonjs worker-script',
      });
    }

    return config;
  },
};

export default nextConfig;
