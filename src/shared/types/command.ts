import { Icon } from './icon';

interface CommandProps {
  title: string;
  description: string;
  icon: Icon;
}

interface CommandItemProps {
  title: string;
  description?: string;
  icon: Icon;
  mode: 'view' | 'no-view';
  keywords?: string[];
}

export type { CommandProps, CommandItemProps };
