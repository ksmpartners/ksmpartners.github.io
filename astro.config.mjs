// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ksmpartners.github.io',
  base: '/',
  redirects: {
    '/services/gxp-migration':              '/solutions/gxp-migration',
    '/services/git-statistical-programming':'/solutions/git-statistical-programming',
    '/services/sce-scoping':                '/solutions/sce-scoping',
    '/services/domino-sce-mvp':             '/solutions/domino-sce-mvp',
  },
})
