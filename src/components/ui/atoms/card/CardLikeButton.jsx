import styled from 'styled-components';

import { ReactComponent as ThumbsUp } from '@assets/thumbs-up.svg';

import { useCardProvider } from './context/cardProvider';

const CardLikeButton = () => {
  const { cardData } = useCardProvider();

  return (
    <StReaction>
      <StThumbsUp width='14px' height='14px' />
      <span>도움이 되었어요</span>
      <span>{cardData?.like}</span>
    </StReaction>
  );
};

export default CardLikeButton;

const StThumbsUp = styled(ThumbsUp)`
  fill: ${({ theme }) => theme.color.Grayscale[40]};
`;

const StReaction = styled.button`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.Grayscale[40]};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  &.active {
    color: ${({ theme }) => theme.color.Blue[50]};
  }
  &.active ${StThumbsUp} {
    fill: ${({ theme }) => theme.color.Blue[50]};
  }
  &:hover {
    color: ${({ theme }) => theme.color.Blue[50]};
  }
  &:hover ${StThumbsUp} {
    fill: ${({ theme }) => theme.color.Blue[50]};
  }
`;
