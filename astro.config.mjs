import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yivi-mainsdefee.fr',
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
});
