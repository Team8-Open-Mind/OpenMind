import styled from 'styled-components';

import { foundation } from '/src/style/theme/theme';

import { feedCardType } from '@utils/card-type/feedCardType';

import { useCardProvider } from './context/cardProvider';

// 배지는 answer의 유무에 따라 정해짐.
// answer의 경우 boolean이 아니라 null이 기본임.
// 답변 거절 상태가 추가되었음. isRejected로 boolean 값을 받아와 처리함.

const gray = foundation.color.Grayscale[40];
const brown = foundation.color.Brown[40];
const red = foundation.color.Red[50];

const CardStateBadge = () => {
  const { cardData } = useCardProvider();

  const value = feedCardType(cardData?.answer);

  if (value === 'read') {
    return <StBadge value={value}>답변 완료</StBadge>;
  }

  if (value === 'reply') {
    return <StBadge value={value}>미답변</StBadge>;
  }

  if (value === 'rejected') {
    return <StBadge value={value}>답변 거절</StBadge>;
  }
};

const StBadge = styled.div`
  display: inline-flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: ${(props) => {
    if (props.value === 'reply') {
      return gray;
    }

    if (props.value === 'rejected') {
      return red;
    }

    return brown;
  }};

  border-radius: 0.8rem;
  border: 0.1rem solid
    ${(props) => {
      if (props.value === 'reply') {
        return gray;
      }

      if (props.value === 'rejected') {
        return red;
      }

      return brown;
    }};
`;

export default CardStateBadge;
