import { ipcRenderer } from 'electron';

import { CommandItemProps } from '@shared/types';
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

export async function onExecuteItem(item: CommandItemProps) {
  const { ON_EXECUTE_ITEM } = IPC.SEARCH;

  await ipcRenderer.invoke(ON_EXECUTE_ITEM, item);
}
