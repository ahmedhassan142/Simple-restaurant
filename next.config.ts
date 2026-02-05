// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
    // ⚠️ Dangerous: Ignores ALL TypeScript errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;