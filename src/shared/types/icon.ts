export enum IconType {
  URL,
  SVG,
  EMOJI,
}

export interface Icon {
  path: string;
  type: IconType;
}
