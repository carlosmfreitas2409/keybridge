import { ENVIRONMENT } from '@shared/constants';

import {
  ScreenModule,
  createTrayMenu,
  setVirtualState,
  loadShortcutsModule,
} from '../modules';

import { createWindow } from '../factories';

export function MainWindow() {
  const mainWindow = createWindow({
    id: 'main',
    width: 750,
    height: 96,
    show: false,
    frame: false,
    resizable: false,
    skipTaskbar: true,
    backgroundColor: '#212023',
  });

  const screenModule = new ScreenModule(mainWindow);

  setVirtualState({ screen: screenModule, mainWindow });

  ENVIRONMENT.IS_DEV && mainWindow.webContents.openDevTools({ mode: 'detach' });

  createTrayMenu();
  loadShortcutsModule();

  return mainWindow;
}
