import { styled } from '@linaria/react';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  border-radius: 6px;

  transition: 0.05s ease-in background;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  font-size: 0.875rem;

  strong {
    font-weight: 500;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const IconSVG = styled.span`
  font-size: 1.25rem;
`;
