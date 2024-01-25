import { useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as ThumbsUp } from '@assets/thumbs-up.svg';

import { useToggle } from '@hooks/useToggle';

const Reaction = ({ likeCount }) => {
  const [isLiked, setIsLiked] = useToggle();
  const [count, setCount] = useState(likeCount);

  const handleReactionCount = () => {
    setIsLiked();
    // setCount(count + 1);
  };

  return (
    <StReaction onClick={handleReactionCount} className={isLiked ? 'active' : null}>
      <StThumbsUp />
      <span>도움이 되었어요</span>
      <span>{count}</span>
    </StReaction>
  );
};

export default Reaction;

const StReaction = styled.button`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.Grayscale[40]};
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &.active {
    color: ${({ theme }) => theme.color.Blue[50]};
  }

  &:hover {
    color: ${({ theme }) => theme.color.Blue[50]};
  }
`;

const StThumbsUp = styled(ThumbsUp)`
  fill: ${({ theme }) => theme.color.Grayscale[40]};
`;
