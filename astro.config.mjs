// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://bdms-group.gitlab.io',
  base: '/work-in-progress',
  integrations: [react()]
});