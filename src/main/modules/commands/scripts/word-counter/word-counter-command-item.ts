import type { CommandItemProps } from '@shared/types';

import { CommandItemEntity } from '../../infra/command-item-entity';

export class WordCounterCommandItem extends CommandItemEntity {
  constructor(item: CommandItemProps) {
    super(item);
  }

  async execute(): Promise<void> {}
}
