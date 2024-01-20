import styled from 'styled-components';

import { brown20Interaction, brown40Interaction } from './interaction';

// default 값이 이미 들어가있음에 주의한다.

const Button = ({ children, theme = 'brown40', disabled = false, width = '100%' }) => {
  return (
    <StButton disabled={disabled} width={width} className={theme === 'brown40' ? 'brown40' : 'brown20'}>
      <span>{children}</span>
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.Grayscale['10']};
  font-size: 1.6rem;
  font-weight: 400;
  width: ${(props) => props.width};
  padding: 12px 0;
  border-radius: 8px;
  transition: 0.1s;

  &.brown20 {
    background: ${({ theme }) => theme.color.Brown['10']};
    outline: 1px solid ${({ theme }) => theme.color.Brown['40']};
    color: ${({ theme }) => theme.color.Brown['40']};

    ${brown20Interaction}
  }

  &.brown40 {
    background: ${({ theme }) => theme.color.Brown['40']};

    ${brown40Interaction}
  }
`;
