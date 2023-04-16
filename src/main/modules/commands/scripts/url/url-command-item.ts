import { shell } from 'electron';

import type { CommandItemProps } from '@shared/types';

import { CommandItemEntity } from '../../infra/command-item-entity';

export class UrlCommandItem extends CommandItemEntity {
  constructor(item: CommandItemProps) {
    super(item);
  }

  async execute(): Promise<void> {
    await shell.openExternal(this.item.title);
  }
}
