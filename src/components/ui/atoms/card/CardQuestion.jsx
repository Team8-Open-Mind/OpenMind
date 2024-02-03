import styled from 'styled-components';

import { useCardProvider } from './context/cardProvider';

const CardQuestion = () => {
  const { cardData } = useCardProvider();

  return <StQuestionContent>{cardData?.content}</StQuestionContent>;
};

export default CardQuestion;

const StQuestionContent = styled.div`
  color: ${({ theme }) => theme.color.Grayscale[60]};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;
