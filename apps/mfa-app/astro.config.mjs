import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import lit from '@astrojs/lit';
import angular from '@analogjs/astro-angular';

export default defineConfig({
  integrations: [react(), lit(), angular()],
  outDir: '../../dist/apps/mfa-app',
});
