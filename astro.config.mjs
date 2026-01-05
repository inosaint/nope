import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // For custom domain: Update 'site' to your custom domain and remove 'base'
  // site: 'https://yourdomain.com',

  // For GitHub Pages default (current):
  site: 'https://inosaint.github.io',
  base: '/nope',

  // Build configuration
  build: {
    assets: 'assets'
  }
});
