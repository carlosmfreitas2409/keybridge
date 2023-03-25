import { app } from 'electron';

export function makeAppWithSingleInstanceLock(fn: VoidFunction) {
  const isPrimaryInstance = app.requestSingleInstanceLock();

  !isPrimaryInstance ? app.quit() : fn();
}
