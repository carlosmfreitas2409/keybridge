import { useEffect, useState } from 'react';
import { evaluate } from 'mathjs';

import { Highlight } from '@components/Highlight';

import { NavigationBar, ContentBar, ActionBar } from './styles';
import { convertNumberToWords } from '@shared/utils/numberToWords';

interface MathResult {
  value: string;
  written: string;
}

const { KeyBridge } = window;

export function MainScreen() {
  const [prompt, setPrompt] = useState<string>('');
  const [mathResult, setMathResult] = useState<MathResult>();

  function handleCalculateMath() {
    try {
      const result = evaluate(prompt);

      setMathResult({
        value: String(result),
        written: convertNumberToWords(result),
      });
    } catch (error) {
      setMathResult(undefined);
    }
  }

  useEffect(() => {
    handleCalculateMath();

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
          onChange={(event) => setPrompt(event.target.value)}
        />
      </NavigationBar>

      {prompt && (
        <>
          <ContentBar>
            {mathResult && (
              <Highlight
                title="Calculator"
                leftContent={{ title: prompt, hint: 'Equation' }}
                rightContent={{
                  title: mathResult.value,
                  hint: mathResult.written,
                }}
              />
            )}
          </ContentBar>

          <ActionBar>
            <span>Store</span>

            <span>Show more</span>
          </ActionBar>
        </>
      )}
    </div>
  );
}
