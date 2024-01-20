import { useState } from 'react';

import styled from 'styled-components';

import { foundation } from '/src/style/theme/theme';

const gray = foundation.color.Grayscale[40];
const blue = foundation.color.Blue[50];

const StReaction = styled.div`
  font-size: 1.4rem;
  color: ${gray};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  &:hover {
    color: ${blue};
  }
`;

const Reaction = () => {
  const [count, setCount] = useState(0);

  const handleReactionCount = () => {
    setCount(count + 1);
  };

  return (
    <StReaction onClick={handleReactionCount}>
      <img src='/image/icon/thumbs_up_icon.svg' alt='엄지' />
      <span>도움이 되었어요</span>
      <span>{count}</span>
    </StReaction>
  );
};

export default Reaction;
