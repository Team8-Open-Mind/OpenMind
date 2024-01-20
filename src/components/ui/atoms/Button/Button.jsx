import styled from 'styled-components';

import { StArrowIcon } from '../sprite-icon/SpriteIcon';
import { brown20Interaction, brown40Interaction } from './interaction';

// default 값이 이미 들어가있음에 주의한다.
// 특히 기본 너비는 "auto"이다.
// 버튼이 동일한 padding 안에서 children 길이에 맞게끔 커져야하기 때문임.

const Button = ({ children, theme = 'brown40', disabled = false, width = 'auto', arrow = false }) => {
  return (
    <StButton disabled={disabled} width={width} className={theme === 'brown40' ? 'brown40' : 'brown20'}>
      <span>{children}</span>
      {arrow ? <StArrowIcon size={18} color={theme === 'brown40' ? 'white' : 'brown40'} /> : null}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.Grayscale['10']};
  font-size: 1.6rem;
  font-weight: 400;
  width: ${(props) => props.width};
  padding: 12px 24px;
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
