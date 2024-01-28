import path from 'path';

import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({ icon: true }),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
              ssr: false,
            },
          ],
        ],
      },
    }),
    // splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@api', replacement: path.resolve(__dirname, 'src/api') },
      { find: '@layout', replacement: path.resolve(__dirname, 'src/shared/layout') },
      { find: '@routes', replacement: path.resolve(__dirname, 'src/shared/routes') },
      { find: '@device', replacement: path.resolve(__dirname, 'src/style/breakpoints') },
      { find: '@style', replacement: path.resolve(__dirname, 'src/style') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
    ],
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('react-router-dom') || id.includes('@remix-run') || id.includes('react-router')) {
  //           return '@react-router';
  //         }
  //       },
  //     },
  //   },
  // },
});
