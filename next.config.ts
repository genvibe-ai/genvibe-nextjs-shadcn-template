import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GenVibe publishes the static site: `next build` writes it to dist/.
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  // The live preview opens the dev server through these domains.
  allowedDevOrigins: ["*.e2b.app", "*.e2b.dev", "*.genvibe.app"],
  // GenVibe's agent has its own instructions; no AGENTS.md from next dev.
  agentRules: false,
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
