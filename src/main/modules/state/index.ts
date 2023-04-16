import type { BrowserWindow, Tray } from 'electron';

import { ScreenModule } from '../screen';
import { CommandModule } from '../commands';

interface State {
  screen: ScreenModule;
  command: CommandModule;
  mainWindow: BrowserWindow | null;
  tray: Tray;
}

let state: State;

export function getVirtualState() {
  return state;
}

export function setVirtualState(stateSlice: Partial<State>) {
  state = {
    ...state,
    ...stateSlice,
  };
}
