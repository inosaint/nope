import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://inosaint.github.io',
  base: '/nope',
  // Build configuration
  build: {
    assets: 'assets'
  }
});
