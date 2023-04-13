import { join } from 'node:path';

import { ENVIRONMENT } from '@shared/constants';

import {
  ScreenModule,
  createTrayMenu,
  setVirtualState,
  loadShortcutsModule,
} from '../modules';

import { createWindow } from '../factories';
import { registerResizeWindowByIPC } from './ipcs/size';

export function MainWindow() {
  const mainWindow = createWindow({
    id: 'main',
    width: 750,
    height: 56,
    show: false,
    frame: false,
    resizable: false,
    skipTaskbar: true,
    backgroundColor: '#212023',

    webPreferences: {
      spellcheck: false,
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, '../preload/index.js'),
    },
  });

  const screenModule = new ScreenModule(mainWindow);

  setVirtualState({ screen: screenModule, mainWindow });

  ENVIRONMENT.IS_DEV && mainWindow.webContents.openDevTools({ mode: 'detach' });

  createTrayMenu();
  loadShortcutsModule();
  registerResizeWindowByIPC();

  return mainWindow;
}
