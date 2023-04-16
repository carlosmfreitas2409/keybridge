import { ChangeEvent, useEffect, useState } from 'react';

import { CommandItemProps } from '@shared/types';

import { Item } from '@components/List/Item';

import { NavigationBar, ContentBar, ActionBar } from './styles';

const { KeyBridge } = window;

export function MainScreen() {
  const [searchResults, setSearchResults] = useState<CommandItemProps[]>([]);

  function handlePromptChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    KeyBridge.search(value);
  }

  function handleExecuteItem() {
    KeyBridge.executeItem();
  }

  useEffect(() => {
    KeyBridge.whenSearchReturns((results) => {
      setSearchResults(results);
    });

    KeyBridge.resizeWindow(
      document.body.clientWidth,
      document.body.clientHeight,
    );
  }, [prompt]);

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
            onClick={handleExecuteItem}
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
