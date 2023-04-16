import { ChangeEvent, useEffect, useState } from 'react';

import type { CommandItemProps } from '@shared/types';

import { Item } from '@components/List/Item';

import { NavigationBar, ContentBar, ActionBar } from './styles';

const { KeyBridge } = window;

export function MainScreen() {
  const [searchResults, setSearchResults] = useState<CommandItemProps[]>([]);

  function handlePromptChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    KeyBridge.search(value);

    KeyBridge.resizeWindow(
      document.body.clientWidth,
      document.body.clientHeight,
    );
  }

  function handleSelectItem(item: CommandItemProps) {
    KeyBridge.onExecuteItem(item);
  }

  useEffect(() => {
    KeyBridge.whenSearchReturns((results) => {
      setSearchResults(results);
    });
  }, []);

  return (
    <div>
      <NavigationBar>
        <input
          type="text"
          placeholder="Search for apps and commands..."
          onChange={handlePromptChange}
          autoFocus
        />
      </NavigationBar>

      <ContentBar>
        {searchResults.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            onClick={() => handleSelectItem(item)}
            rightContent={<span>{COMMAND_TYPE[item.type]}</span>}
          />
        ))}
      </ContentBar>

      <ActionBar>
        <span>Store</span>
        <span>Show more</span>
      </ActionBar>
    </div>
  );
}

const COMMAND_TYPE: Record<CommandItemProps['type'], string> = {
  script: 'Script Command',
  command: 'Command',
  application: 'Application',
};
