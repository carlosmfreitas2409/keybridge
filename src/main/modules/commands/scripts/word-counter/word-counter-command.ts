import { clipboard } from 'electron';

import { Icon, IconType } from '@shared/types';

import { CommandEntity } from '../../infra/command-entity';

import { WordCounterCommandItem } from './word-counter-command-item';

export class WordCounterCommand extends CommandEntity {
  constructor() {
    super({
      title: 'Word Counter',
      description:
        'Get the total of characters, words and lines of the current clipboard text.',
      icon: DEFAULT_ICON,
    });
  }

  public search(): void {
    const currentClipboard = clipboard.readText();

    const words = currentClipboard.split(' ').length;
    const lines = currentClipboard.split(/\r\n|\r|\n/).length;
    const characters = Array.from(currentClipboard).length;

    const item = new WordCounterCommandItem({
      title: 'Word Counter',
      description: `Words: ${words}, Lines: ${lines}, Characters: ${characters}`,
      mode: 'no-view',
      icon: DEFAULT_ICON,
    });

    this.addItems([item]);
  }
}

const DEFAULT_ICON: Icon = {
  type: IconType.EMOJI,
  path: String.fromCodePoint(0x1f6be),
};
