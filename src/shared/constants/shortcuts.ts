import { PLATFORM } from './platform';

export const SHORTCUTS = {
  TOGGLE_APP: PLATFORM.IS_MAC ? 'CommandOrControl+K' : 'Ctrl+K',
  HIDE_APP: 'Esc',
};
