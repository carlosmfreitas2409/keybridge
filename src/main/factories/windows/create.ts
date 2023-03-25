import path from 'node:path';
import process from 'node:process';
import { BrowserWindow } from 'electron';
import { createFileRoute, createURLRoute } from 'electron-router-dom';

import { ENVIRONMENT } from '@shared/constants';
import { WindowProps } from '@shared/types';

export function createWindow(settings: WindowProps) {
  const window = new BrowserWindow(settings);

  const devServerURL = createURLRoute(
    process.env.ELECTRON_RENDERER_URL!,
    'main',
  );

  const fileRoute = createFileRoute(
    path.join(process.cwd(), 'src/renderer/index.html'),
    'main',
  );

  if (ENVIRONMENT.IS_DEV && ENVIRONMENT.ELECTRON.RENDERER_URL) {
    window.loadURL(devServerURL);
  } else {
    window.loadFile(...fileRoute);
  }

  window.on('ready-to-show', () => {
    window.show();
  });

  window.on('closed', window.destroy);

  return window;
}
