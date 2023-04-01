import { ipcMain } from 'electron';

import { getVirtualState } from '@main/modules';
import { IPC } from '@shared/constants/ipc';

export function registerResizeWindowByIPC() {
  const { screen } = getVirtualState();
  const { RESIZE } = IPC.WINDOWS;

  ipcMain.on(RESIZE, (_, { width, height }) => {
    screen.resizeWindow(width, height);
  });
}
