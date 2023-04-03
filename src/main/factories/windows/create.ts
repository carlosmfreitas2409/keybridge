import { createFileRoute, createURLRoute } from 'electron-router-dom';
import { BrowserWindow } from 'electron';
import { join } from 'node:path';

import { ENVIRONMENT } from '@shared/constants';
import { WindowProps } from '@shared/types';

export function createWindow({ id, ...settings }: WindowProps) {
  const window = new BrowserWindow(settings);

  const devServerURL = createURLRoute(
    process.env['ELECTRON_RENDERER_URL']!,
    id,
  );

  const fileRoute = createFileRoute(
    join(__dirname, '../renderer/index.html'),
    id,
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
