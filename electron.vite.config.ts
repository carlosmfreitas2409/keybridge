import { resolve } from 'node:path';

import { defineConfig, externalizeDepsPlugin, swcPlugin } from 'electron-vite';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import reactPlugin from '@vitejs/plugin-react-swc';
import linariaPlugin from '@linaria/vite';

const tsconfigPaths = tsconfigPathsPlugin();

export default defineConfig({
  main: {
    plugins: [tsconfigPaths, externalizeDepsPlugin(), swcPlugin()],
  },

  preload: {
    plugins: [tsconfigPaths, externalizeDepsPlugin(), swcPlugin()],
  },

  renderer: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.platform': JSON.stringify(process.platform),
    },

    resolve: {
      alias: {
        '@renderer': resolve('src/renderer'),
      },
    },

    plugins: [
      tsconfigPaths,
      linariaPlugin(),
      reactPlugin(),
      externalizeDepsPlugin(),
    ],
  },
});
