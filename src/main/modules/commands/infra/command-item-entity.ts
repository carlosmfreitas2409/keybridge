import { isDeepStrictEqual } from 'node:util';

import { CommandItemProps } from '@shared/types';

export abstract class CommandItemEntity {
  private readonly _item: CommandItemProps;

  constructor(item: CommandItemProps) {
    this._item = item;
  }

  get item(): CommandItemProps {
    return this._item;
  }

  public abstract execute(): Promise<void>;

  public equals(props: CommandItemProps): boolean {
    if (props === null || props === undefined) return false;

    if (!isDeepStrictEqual(this._item, props)) return false;

    return true;
  }
}
