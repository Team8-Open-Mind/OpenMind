import styled from 'styled-components';

import { timeStamp } from '@utils/time/timeStamp';

import { useCardProvider } from './context/cardProvider';

const CardAnswerElapsedTime = () => {
  const { cardData } = useCardProvider();

  if (cardData?.answer !== null) {
    // 답변이 있을 경우에만 보여준다.
    return <StElapsedTime>{timeStamp(cardData?.answer?.createdAt)}</StElapsedTime>;
  }
};

export default CardAnswerElapsedTime;

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
