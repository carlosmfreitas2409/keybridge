import { app, globalShortcut } from 'electron';

import { SHORTCUTS } from '@shared/constants';

import { getVirtualState } from './state';

export function loadShortcutsModule() {
  const { screen } = getVirtualState();

  globalShortcut.register(SHORTCUTS.TOGGLE_APP, () => {
    screen.toggleWindowVisibility();
  });

  app.on('browser-window-focus', () => {
    globalShortcut.register(SHORTCUTS.HIDE_APP, () => {
      screen.hideWindow();
    });
  });

  app.on('browser-window-blur', () => {
    globalShortcut.unregister(SHORTCUTS.HIDE_APP);
  });
}
