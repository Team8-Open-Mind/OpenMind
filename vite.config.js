import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@api', replacement: path.resolve(__dirname, 'src/api') },
      { find: '@layout', replacement: path.resolve(__dirname, 'src/shared/layout') },
      { find: '@routes', replacement: path.resolve(__dirname, 'src/shared/routes') },
      { find: '@device', replacement: path.resolve(__dirname, './src/style/breakpoints') },
    ],
  },
});
