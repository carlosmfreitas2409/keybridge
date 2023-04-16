import type { CommandItemProps } from '@shared/types';

import { CommandEntity } from './infra/command-entity';

import { UrlCommand, WordCounterCommand } from './scripts';

export class CommandModule {
  private commands: CommandEntity[] = [];

  constructor() {
    this.commands = [new WordCounterCommand(), new UrlCommand()];
  }

  public async getSearchResults(
    userInput: string,
  ): Promise<CommandItemProps[]> {
    return this.commands.flatMap((command) => command.getItems(userInput));
  }
}
