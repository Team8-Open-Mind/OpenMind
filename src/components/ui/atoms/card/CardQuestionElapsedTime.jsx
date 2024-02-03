import styled from 'styled-components';

import { timeStamp } from '@utils/time/timeStamp';

import { useCardProvider } from './context/cardProvider';

const CardQuestionElapsedTime = () => {
  const { cardData } = useCardProvider();

  return <StElapsedTime>{timeStamp(cardData?.createdAt)}</StElapsedTime>;
};

export default CardQuestionElapsedTime;

const StElapsedTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;

  color: ${({ theme }) => theme.color.Grayscale[40]};
  font-size: 1.4rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
