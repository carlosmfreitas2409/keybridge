import { ipcMain } from 'electron';

import { IPC } from '@shared/constants';

import { getVirtualState } from '@main/modules';

export function registerSearchByIPC() {
  const { command } = getVirtualState();

  const { GET_SEARCH_RESULTS, WHEN_SEARCH_RETURNS, ON_EXECUTE_ITEM } =
    IPC.SEARCH;

  ipcMain.on(GET_SEARCH_RESULTS, (event, value: string) => {
    const results = command.getSearchResults(value);
    event.sender.send(WHEN_SEARCH_RETURNS, results);
  });

  ipcMain.handle(ON_EXECUTE_ITEM, async (_, item) => {
    await command.onExecute(item);
  });
}
