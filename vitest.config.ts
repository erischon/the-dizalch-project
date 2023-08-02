import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      all: true,
      exclude: [
        "**/node_modules/**",
        "**/vitest.config.ts",
        "**/vitest.setup.ts",
        ".next/**",
        "coverage/**",
        "**/*.d.ts",
        "**/next-env.d.ts",
        "**/next.config.js",
        "**/postcss.config.js",
        "**/tailwind.config.js",
        "**/tsconfig.json",
        "**/__tests__/**",
      ],
    },
  },
});
