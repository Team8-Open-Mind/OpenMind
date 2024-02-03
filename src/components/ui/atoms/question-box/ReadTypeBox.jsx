import styled from 'styled-components';

import { useCardProvider } from '../card/context/cardProvider';

const ReadTypeBox = () => {
  const { cardData } = useCardProvider();

  if (cardData?.answer !== null) {
    // 답장이 있을 때에만 return해 준다.
    return <StReadText>{cardData?.answer?.content}</StReadText>;
  }
};

export default ReadTypeBox;

const StReadText = styled.p`
  width: 100%;

  font-size: 1.6rem;
  line-height: 22px;
`;
