import { join } from 'node:path';

import { ENVIRONMENT, PLATFORM } from '@shared/constants';

import {
  ScreenModule,
  createTrayMenu,
  setVirtualState,
  loadShortcutsModule,
} from '../modules';

import { createWindow } from '../factories';
import { registerWindowByIPC } from './ipcs/window';

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

  PLATFORM.IS_MAC && mainWindow.setWindowButtonVisibility(false);
  ENVIRONMENT.IS_DEV && mainWindow.webContents.openDevTools({ mode: 'detach' });

  mainWindow.setAlwaysOnTop(true, 'screen-saver');

  createTrayMenu();
  loadShortcutsModule();
  registerWindowByIPC();

  return mainWindow;
}
