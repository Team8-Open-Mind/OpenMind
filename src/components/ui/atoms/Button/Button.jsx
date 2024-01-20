import styled from 'styled-components';

import { foundation } from '/src/style/theme/theme';

const brown20 = foundation.color.Brown[20];
const brown40 = foundation.color.Brown[40];

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 400;

  &.brown20 {
    background: ${brown20};
  }

  &.brown40 {
    background: ${brown40};
  }
`;

const Button = ({ children, theme = 'brown40', disabled = false }) => {
  return (
    <StButton disabled={disabled ? `disabled` : ''} className={theme === 'brown40' ? 'brown40' : 'brown20'}>
      <span>{children}</span>
    </StButton>
  );
};

export default Button;
