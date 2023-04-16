import { CommandItemProps } from '@shared/types';

export abstract class CommandItemEntity {
  private readonly _item: CommandItemProps;

  constructor(item: CommandItemProps) {
    this._item = item;
  }

  get item(): CommandItemProps {
    return this._item;
  }
}
