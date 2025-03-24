import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://GaetanG.github.io',
  base: '/project_portfolio/',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
