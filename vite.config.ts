import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/auden-landscape/', 
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
          scope: '/auden-landscape/',
          start_url: '/auden-landscape/',
          icons: [{ src: '/auden-landscape/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
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
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
