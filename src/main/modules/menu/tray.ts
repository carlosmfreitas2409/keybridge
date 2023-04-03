import { Tray } from 'electron';

import { APP } from '@shared/constants';

import { setVirtualState } from '../state';
import { createContextMenu, trayIconPath } from './context';

export function createTrayMenu() {
  const tray = new Tray(trayIconPath);

  setVirtualState({ tray });

  tray.setToolTip(APP.TITLE);

  createContextMenu();
}
