import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://noopur.me',
  // Note: 'base' is removed for custom domain deployment

  // Build configuration
  build: {
    assets: 'assets'
  }
});
