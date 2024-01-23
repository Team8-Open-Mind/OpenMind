import { useState } from 'react';

import styled from 'styled-components';

import { StThumbsUpIcon } from '../sprite-icon/SpriteIcon';

const Reaction = () => {
  const [count, setCount] = useState(0);

  const handleReactionCount = () => {
    setCount(count + 1);
  };

  return (
    <StReaction onClick={handleReactionCount}>
      <StThumbsUpIcon $size={16} $color='gray40' />
      <span>도움이 되었어요</span>
      <span>{count}</span>
    </StReaction>
  );
};

export default Reaction;

const StReaction = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.Grayscale['40']};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  &:hover {
    color: ${({ theme }) => theme.color.Blue['50']};
  }
`;
