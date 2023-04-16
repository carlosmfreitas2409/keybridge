import { ipcMain } from 'electron';

import { getVirtualState } from '@main/modules';
import { IPC } from '@shared/constants';

export function registerWindowByIPC() {
  const { screen } = getVirtualState();
  const { RESIZE } = IPC.WINDOWS;

  ipcMain.on(RESIZE, (_, { width, height }) => {
    screen.resizeWindow(width, height);
  });
}
