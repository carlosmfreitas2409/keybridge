import { join } from 'node:path';

import { ENVIRONMENT, PLATFORM } from '@shared/constants';

import {
  ScreenModule,
  createTrayMenu,
  setVirtualState,
  loadShortcutsModule,
} from '@main/modules';
import { createWindow } from '@main/factories';
import { CommandModule } from '@main/modules/commands';

import { registerWindowByIPC, registerSearchByIPC } from './ipcs';

export function MainWindow() {
  const mainWindow = createWindow({
    id: 'main',
    width: 750,
    height: 56,
    maxHeight: 475,
    show: false,
    frame: false,
    resizable: false,
    skipTaskbar: true,
    alwaysOnTop: true,
    backgroundColor: '#212023',
    roundedCorners: true,

    webPreferences: {
      spellcheck: false,
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, '../preload/index.js'),
    },
  });

  PLATFORM.IS_MAC && mainWindow.setWindowButtonVisibility(false);
  ENVIRONMENT.IS_DEV && mainWindow.webContents.openDevTools({ mode: 'detach' });

  setVirtualState({
    screen: new ScreenModule(mainWindow),
    command: new CommandModule(),
    mainWindow,
  });

  createTrayMenu();
  loadShortcutsModule();

  registerWindowByIPC();
  registerSearchByIPC();

  return mainWindow;
}
