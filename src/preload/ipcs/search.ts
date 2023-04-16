import { ipcRenderer } from 'electron';

import { IPC } from '@shared/constants';

export function search(value: string) {
  const { GET_SEARCH_RESULTS } = IPC.SEARCH;

  ipcRenderer.send(GET_SEARCH_RESULTS, value);
}

export function whenSearchReturns(fn: (...args: any[]) => void) {
  const { WHEN_SEARCH_RETURNS } = IPC.SEARCH;

  ipcRenderer.on(WHEN_SEARCH_RETURNS, (_, ...args) => {
    fn(...args);
  });
}

export function executeItem() {
  const { EXECUTE_ITEM } = IPC.SEARCH;

  ipcRenderer.send(EXECUTE_ITEM);
}
