import type { BrowserWindow, Tray } from 'electron';
import { ScreenModule } from '../screen';

interface State {
  screen: ScreenModule;
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
