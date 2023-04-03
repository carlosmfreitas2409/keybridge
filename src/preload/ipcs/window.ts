import { ipcRenderer } from 'electron';

import { IPC } from '@shared/constants';

export function resizeWindow(width: number, height: number) {
  const { RESIZE } = IPC.WINDOWS;

  ipcRenderer.send(RESIZE, {
    width,
    height,
  });
}
