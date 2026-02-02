// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://Francisco-SP3.github.io',
  output: 'static',
  integrations: [react()]
});