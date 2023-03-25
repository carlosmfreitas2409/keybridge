import { BrowserWindowConstructorOptions } from 'electron';

export interface WindowProps extends BrowserWindowConstructorOptions {
  id: string;
}
