import { globalShortcut } from 'electron';
import { getVirtualState } from './state';

export function loadShortcutsModule() {
  const { screen } = getVirtualState();

  globalShortcut.register('Shift+Alt+2', () => {
    screen.toggleWindowVisibility();
  });
}
