import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg'],
        manifest: {
          name: 'Auden Landscape Architecture',
          short_name: 'Auden',
          description:
            'Premium garden and park design studio crafting bespoke residential and civic landscapes.',
          theme_color: '#2C1810',
          background_color: '#F9F6F0',
          display: 'standalone',
          scope: '/',
          start_url: '/',
          icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,woff2}'],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
