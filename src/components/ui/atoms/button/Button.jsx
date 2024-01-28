import styled from 'styled-components';

import { brown20Interaction, brown40Interaction } from './interaction';
import { tabletSize } from './media-query';
import { StArrowIcon } from '../sprite-icon/SpriteIcon';

// default 값이 이미 들어가있음에 주의한다.
// 특히 기본 너비는 "auto"이다.
// 버튼이 동일한 padding 안에서 children 길이에 맞게끔 커져야하기 때문임.

const Button = ({ children, onClickHandler, theme = 'brown40', disabled = false, width = 'auto', arrow = false }) => {
  return (
    <StButton
      onClick={onClickHandler}
      disabled={disabled}
      $width={width}
      className={theme === 'brown40' ? 'brown40' : 'brown20'}
    >
      <span>{children}</span>
      {arrow ? <StArrowIcon $size={18} $color={theme === 'brown40' ? 'gray10' : 'brown40'} /> : null}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${({ theme }) => theme.color.Grayscale['10']};
  font-size: 1.4rem;
  font-weight: 400;
  width: ${(props) => props.$width};
  border-radius: 8px;
  padding: 8px 12px;
  transition: 0.1s;
  line-height: 18px;

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

  ${tabletSize}
`;
