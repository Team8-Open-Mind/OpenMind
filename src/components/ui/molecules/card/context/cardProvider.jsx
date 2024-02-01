import { createContext, useContext } from 'react';

import styled from 'styled-components';

const CardContext = createContext();

const CardProvider = ({ children }) => {
  return (
    <CardContext.Provider value=''>
      <StCardContainer>{children}</StCardContainer>
    </CardContext.Provider>
  );
};

export default CardProvider;

export const useCardProvider = () => {
  const context = useContext(CardContext);

  if (context === undefined) throw new Error('useCardProvider 는 CardProvider안에서만 사용되어야 합니다.');

  return context;
};

const StCardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  margin-top: 16px;

  border-radius: 16px;
  background: ${({ theme }) => theme.color.Grayscale[10]};

  box-shadow: ${({ theme }) => theme.shadow[10]};
`;
