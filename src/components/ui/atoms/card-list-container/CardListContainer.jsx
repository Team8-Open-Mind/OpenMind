import styled from 'styled-components';

const CardListContainer = ({ children }) => {
  return <StFCardListContainer>{children}</StFCardListContainer>;
};

export default CardListContainer;

const StFCardListContainer = styled.div`
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 716px;
  margin: 0px auto;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.Brown['30']};
  background: ${({ theme }) => theme.color.Brown['10']};
`;
