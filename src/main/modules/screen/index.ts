import { BrowserWindow } from 'electron';

export class ScreenModule {
  private window: BrowserWindow;
  private isScreenVisible = true;

  constructor(window: BrowserWindow) {
    this.window = window;
  }

  toggleWindowVisibility() {
    this.isScreenVisible ? this.window.hide() : this.window.show();
    this.isScreenVisible = !this.isScreenVisible;
  }

  resizeWindow(width: number, height: number) {
    this.window.setBounds({ width, height });
  }
}
