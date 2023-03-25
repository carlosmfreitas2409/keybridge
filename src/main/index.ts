import { app } from 'electron';

import { makeAppSetup, makeAppWithSingleInstanceLock } from './factories';
import { MainWindow } from './windows/main';

makeAppWithSingleInstanceLock(async () => {
  await app.whenReady();
  makeAppSetup(MainWindow);
});
