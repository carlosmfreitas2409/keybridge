import { Icon, IconType } from '@shared/types/icon';

import { Container, LeftContent, IconSVG } from './styles';

interface ItemProps {
  title: string;
  description?: string;
  icon?: Icon;
  onClick?: VoidFunction;
}

export function Item({ title, description, icon, onClick }: ItemProps) {
  function getIcon() {
    if (!icon) return;

    switch (icon.type) {
      case IconType.URL:
        return <img src={icon.path} alt={title} />;
      case IconType.SVG:
        return icon.path;
      case IconType.EMOJI:
        return <IconSVG>{icon.path}</IconSVG>;
    }
  }

  return (
    <Container onClick={onClick}>
      <LeftContent>
        {getIcon()}

        <strong>{title}</strong>
        <p>{description}</p>
      </LeftContent>
    </Container>
  );
}
