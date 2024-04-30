import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

  site: `https://andreaheilrath.github.io/astro-ockermap/`,
  base: '/',  // '/astro-ockermap' building for GitHub pages, '/' for local dev
  output: 'static',
  outDir: './docs',
  build: {
    assets: 'astro'
  }

});
