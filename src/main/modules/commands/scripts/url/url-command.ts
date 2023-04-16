import { Icon, IconType } from '@shared/types';

import { CommandEntity } from '../../infra/command-entity';

import { UrlCommandItem } from './url-command-item';

export class UrlCommand extends CommandEntity {
  constructor() {
    super({
      title: 'URL Opener',
      description: 'Open websites quickly by just typing the URL',
      icon: DEFAULT_ICON,
    });
  }

  public search(query: string): void {
    const item = new UrlCommandItem({
      title: query,
      mode: 'no-view',
      type: 'script',
      icon: DEFAULT_ICON,
    });

    this.addItems([item]);
  }
}

const DEFAULT_ICON: Icon = {
  type: IconType.EMOJI,
  path: String.fromCodePoint(0x1f517),
};
