import type { CommandItemProps } from '@shared/types';

import { CommandEntity } from './infra/command-entity';
import { CommandItemEntity } from './infra/command-item-entity';

import { UrlCommand, WordCounterCommand } from './scripts';

export class CommandModule {
  private commands: CommandEntity[] = [];
  private items: CommandItemEntity[] = [];

  constructor() {
    this.commands = [new WordCounterCommand(), new UrlCommand()];
  }

  public getSearchResults(userInput: string): CommandItemProps[] {
    const entities = this.commands.flatMap((cmd) => cmd.getItems(userInput));
    this.items = entities;

    return entities.map((entity) => entity.item);
  }

  public async onExecute(item: CommandItemProps) {
    const entity = this.items.find((entity) => entity.equals(item));

    if (!entity) return;

    await entity.execute();
  }
}
