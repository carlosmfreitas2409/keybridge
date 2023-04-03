import { BrowserWindow } from 'electron';

export class ScreenModule {
  private window: BrowserWindow;

  constructor(window: BrowserWindow) {
    this.window = window;
  }

  hideWindow() {
    this.window.hide();
  }

  toggleWindowVisibility() {
    this.window.isVisible() ? this.window.hide() : this.window.show();
  }

  resizeWindow(width: number, height: number) {
    this.window.setBounds({ width, height });
  }
}
