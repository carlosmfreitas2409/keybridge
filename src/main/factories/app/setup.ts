import { app, BrowserWindow } from 'electron';

import { PLATFORM, ENVIRONMENT } from '@shared/constants';

export function makeAppSetup(createWindow: () => BrowserWindow) {
  let window = createWindow();

  app.on('activate', () => {
    if (!BrowserWindow.getAllWindows().length) {
      window = createWindow();
    }
  });

  app.on('window-all-closed', () => !PLATFORM.IS_MAC && app.quit());

  app.commandLine.appendSwitch('enable-transparent-visuals');

  !ENVIRONMENT.IS_DEV &&
    app.setLoginItemSettings({
      openAtLogin: true,
      openAsHidden: true,
    });

  return window;
}

app.commandLine.appendSwitch('force-color-profile', 'srgb');
