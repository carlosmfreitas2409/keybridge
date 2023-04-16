import { BrowserWindow, screen } from 'electron';

export class ScreenModule {
  private window: BrowserWindow;

  constructor(window: BrowserWindow) {
    this.window = window;
  }

  private getEntryCursorPosition() {
    const currentDisplay = screen.getDisplayNearestPoint(
      screen.getCursorScreenPoint(),
    );

    this.window.setPosition(
      currentDisplay.workArea.x,
      currentDisplay.workArea.y,
    );

    this.window.center();
  }

  hideWindow() {
    this.window.hide();
  }

  toggleWindowVisibility() {
    if (this.window.isVisible()) {
      this.window.hide();

      return;
    }

    this.getEntryCursorPosition();
    this.window.show();
  }

  resizeWindow(width: number, height: number) {
    this.window.setBounds({ width, height });
  }
}
