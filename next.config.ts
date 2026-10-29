import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let a browser on the tailnet connect to the dev server, including hot reload.
  allowedDevOrigins: ["100.95.103.24", "m7", "**.ts.net"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.imgur.com" }],
  },
};

export default nextConfig;
