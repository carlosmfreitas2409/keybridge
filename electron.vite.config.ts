import { defineConfig, externalizeDepsPlugin, swcPlugin } from 'electron-vite';
import { resolve, normalize, dirname } from 'node:path';

import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import reactPlugin from '@vitejs/plugin-react-swc';
import linariaPlugin from '@linaria/vite';

import { main, resources } from './package.json';

const tsconfigPaths = tsconfigPathsPlugin();

const [nodeModules, devFolder] = normalize(dirname(main)).split(/\/|\\/g);
const devPath = [nodeModules, devFolder].join('/');

export default defineConfig({
  main: {
    plugins: [tsconfigPaths, externalizeDepsPlugin(), swcPlugin()],

    build: {
      rollupOptions: {
        input: {
          index: resolve('src/main/index.ts'),
        },

        output: {
          dir: resolve(devPath, 'main'),
        },
      },
    },
  },

  preload: {
    plugins: [tsconfigPaths, externalizeDepsPlugin(), swcPlugin()],

    build: {
      outDir: resolve(devPath, 'preload'),
    },
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

    plugins: [tsconfigPaths, linariaPlugin(), reactPlugin()],
    publicDir: resolve(resources, 'public'),

    build: {
      outDir: resolve(devPath, 'renderer'),

      rollupOptions: {
        input: {
          index: resolve('src/renderer/index.html'),
        },

        output: {
          dir: resolve(devPath, 'renderer'),
        },
      },
    },
  },
});
