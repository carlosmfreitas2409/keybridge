import path from 'node:path';

import { defineConfig, externalizeDepsPlugin, swcPlugin } from 'electron-vite';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import reactPlugin from '@vitejs/plugin-react-swc';

const tsconfigPaths = tsconfigPathsPlugin();

export default defineConfig({
  main: {
    plugins: [tsconfigPaths, externalizeDepsPlugin(), swcPlugin()],
  },
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform),
    },

    resolve: {
      alias: {
        '@renderer': path.resolve('src/renderer'),
      },
    },

    plugins: [tsconfigPaths, reactPlugin(), externalizeDepsPlugin()],
  },
});
