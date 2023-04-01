import { styled } from '@linaria/react';

export const NavigationBar = styled.div`
  height: 3.5rem;
  padding: 16px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid rgba(143, 141, 145, 0.2);

  input {
    flex-grow: 1;
    background: none;
    color: #ffffff;

    font-weight: 500;
    font-size: 1rem;
  }
`;

export const ContentBar = styled.div`
  margin: 24px 10px 16px;
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  border-top: 1px solid rgba(143, 141, 145, 0.2);

  span {
    font-size: 0.813rem;
    color: rgba(255, 255, 255, 0.6);
  }
`;
