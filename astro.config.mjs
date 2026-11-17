import { defineConfig } from 'astro/config';

// Custom domain (public/CNAME) → site served from the root, no `base` needed.
export default defineConfig({
  site: 'https://zeroth.me',
});
