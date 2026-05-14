import type { NextConfig } from "next";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
const projectRoot = dirname(fileURLToPath(import.meta.url));
const packageAlias = {
  tailwindcss: join(projectRoot, "node_modules/tailwindcss/index.css"),
  "tw-animate-css": join(projectRoot, "node_modules/tw-animate-css/dist/tw-animate.css"),
  "shadcn/tailwind.css": join(projectRoot, "node_modules/shadcn/dist/tailwind.css"),
};

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
    resolveAlias: packageAlias,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...packageAlias,
    };

    return config;
  },
};

export default withNextIntl(nextConfig);
