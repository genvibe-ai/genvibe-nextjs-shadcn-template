import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  return {
    // GenVibe publishes the static site: `next build` writes it to dist/. The dev server keeps its
    // own files in .next, so they never end up in a published site.
    output: "export",
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next" : "dist",
    images: { unoptimized: true },
    // The live preview opens the dev server through these domains.
    allowedDevOrigins: ["*.e2b.app", "*.e2b.dev", "*.genvibe.app"],
    // GenVibe's agent has its own instructions; no AGENTS.md from next dev.
    agentRules: false,
    // No floating Next.js dev-tools button in the preview; errors still show.
    devIndicators: false,
    turbopack: {
      rules: {
        "*.css": {
          loaders: ["@tailwindcss/turbopack"],
          as: "*.css",
        },
      },
    },
  };
}
