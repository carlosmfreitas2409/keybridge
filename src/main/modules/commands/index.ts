import Fuse from 'fuse.js';

import type { CommandItemProps } from '@shared/types';

import { CommandEntity } from './infra/command-entity';
import { CommandItemEntity } from './infra/command-item-entity';

import { UrlCommand, WordCounterCommand } from './scripts';

export class CommandModule {
  private searchableCommands: CommandEntity[] = [];
  private fallbackCommands: CommandEntity[] = [];
  private items: CommandItemEntity[] = [];

  constructor() {
    this.searchableCommands = [new WordCounterCommand()];
    this.fallbackCommands = [new UrlCommand()];
  }

  public getSearchResults(userInput: string): CommandItemProps[] {
    const fallbackEntities = this.fallbackCommands
      .filter((cmd) => cmd.isValid(userInput))
      .flatMap((cmd) => cmd.getItems(userInput));

    const searchableEntities = this.searchableCommands.flatMap((cmd) =>
      cmd.getItems(userInput),
    );

    const fallbackList = fallbackEntities.map((entity) => entity.item);
    const searchableList = this.searchByCommands(
      userInput,
      searchableEntities.map((entity) => entity.item),
    );

    this.items = [...fallbackEntities, ...searchableEntities];

    return [...fallbackList, ...searchableList];
  }

  public async onExecute(item: CommandItemProps) {
    const entity = this.items.find((entity) => entity.equals(item));

    if (!entity) return;

    await entity.execute();
  }

  private searchByCommands(
    userInput: string,
    items: CommandItemProps[],
  ): CommandItemProps[] {
    const fuse = new Fuse(items, {
      keys: ['title', 'keywords'],
      minMatchCharLength: 1,
      shouldSort: true,
      threshold: 0.5,
      distance: 100,
    });

    const fuseResult = fuse.search(userInput).map((result) => result.item);

    return fuseResult;
  }
}
