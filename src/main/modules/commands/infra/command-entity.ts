import type { CommandItemProps, CommandProps } from '@shared/types';

import { CommandItemEntity } from './command-item-entity';

export abstract class CommandEntity {
  private readonly _manifest: CommandProps;
  protected _items: CommandItemEntity[] = [];

  constructor(manifest: CommandProps) {
    this._manifest = manifest;
  }

  get manifest(): CommandProps {
    return this._manifest;
  }

  public getItems(query: string): CommandItemProps[] {
    this.search(query);
    return this._items.map(({ item }) => item);
  }

  public addItems(items: CommandItemEntity[]) {
    this._items = items;
  }

  public abstract search(query: string): void;
}
