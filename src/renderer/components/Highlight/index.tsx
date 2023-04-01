import { ArrowRight } from 'phosphor-react';

import { Container, Content, Hint, Separator, Title } from './styles';

interface Content {
  title: string;
  hint: string;
}

interface HighlightProps {
  title: string;
  leftContent: Content;
  rightContent: Content;
}

export function Highlight({
  title,
  leftContent,
  rightContent,
}: HighlightProps) {
  return (
    <>
      <Title>{title}</Title>

      <Container>
        <Content>
          <h3>{leftContent.title}</h3>
          <Hint>{leftContent.hint}</Hint>
        </Content>

        <Separator>
          <ArrowRight size={32} />
        </Separator>

        <Content>
          <h3>{rightContent.title}</h3>
          <Hint>{rightContent.hint}</Hint>
        </Content>
      </Container>
    </>
  );
}
