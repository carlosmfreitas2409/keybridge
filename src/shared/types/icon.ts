export enum IconType {
  URL = 'URL',
  SVG = 'SVG',
  EMOJI = 'EMOJI',
}

export interface Icon {
  path: string;
  type: IconType;
}
