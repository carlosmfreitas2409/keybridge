import { contextBridge } from 'electron';

import * as ipcs from './ipcs';

declare global {
  interface Window {
    KeyBridge: typeof API;
  }
}

export const API = {
  ...ipcs,
};

contextBridge.exposeInMainWorld('KeyBridge', API);
