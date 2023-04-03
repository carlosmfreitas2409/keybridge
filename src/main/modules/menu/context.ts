import { Menu } from 'electron';
import { join } from 'node:path';

import { APP, SHORTCUTS } from '@shared/constants';

import { getVirtualState } from '../state';

export const trayIconPath = join(
  __dirname,
  '..',
  'renderer',
  'tray',
  'trayTemplate.png',
);

export function createContextMenu() {
  const { tray } = getVirtualState();

  tray.on('click', () => tray.popUpContextMenu());

  const contextMenu = Menu.buildFromTemplate([
    {
      type: 'normal',
      label: APP.TITLE,
      accelerator: SHORTCUTS.TOGGLE_APP,
      enabled: false,
    },
    {
      type: 'separator',
    },
    {
      type: 'normal',
      label: 'Close',
      role: 'quit',
      enabled: true,
    },
  ]);

  !tray.isDestroyed() && tray.setContextMenu(contextMenu);
}
