import { styled } from '@linaria/react';

export const Title = styled.h5`
  padding-left: 10px;
  margin-bottom: 8px;

  color: rgba(255, 255, 255, 0.6);

  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px 1fr;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
`;

export const Content = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: 92px auto;

  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;

  text-align: center;
`;

export const Hint = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  padding: 3px 8px;
  margin-bottom: 12px;

  font-size: 11px;
  font-weight: 500;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before,
  &::after {
    content: '';
    width: 1px;
    height: 34px;
    position: absolute;

    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;
