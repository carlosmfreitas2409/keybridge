import { ipcMain } from 'electron';

import { IPC } from '@shared/constants';

import { getVirtualState } from '@main/modules';

export function registerSearchByIPC() {
  const { command } = getVirtualState();

  const { GET_SEARCH_RESULTS, WHEN_SEARCH_RETURNS, EXECUTE_ITEM } = IPC.SEARCH;

  ipcMain.on(GET_SEARCH_RESULTS, async (event, value: string) => {
    const results = await command.getSearchResults(value);
    event.sender.send(WHEN_SEARCH_RETURNS, results);
  });

  ipcMain.on(EXECUTE_ITEM, async (_) => {
    console.log('executed');
  });
}
