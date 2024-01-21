import styled from 'styled-components';

import { colorWhenPlaceholder, colorWhenTyping } from '../color';
import { useCheckIsTyping } from '../hooks/useCheckIsTyping';

const InputField = ({ value, onChangeHandler }) => {
  const { isTyping, startTyping, stopTyping } = useCheckIsTyping();

  return (
    <StInputWrapper>
      <StImg alt='인풋 사람 아이콘' src='/image/icon/input-icon-person.svg' />
      <StInput
        value={value}
        $isTyping={isTyping}
        placeholder='이름을 입력하세요'
        onChange={onChangeHandler}
        onKeyUp={stopTyping}
        onInput={startTyping}
      />
    </StInputWrapper>
  );
};

export default InputField;

const StInputWrapper = styled.div`
  width: 100%;
  height: 4.6rem;
  padding-inline: 1.2rem 1.6rem;

  justify-content: center;
  display: flex;
  align-items: center;
  column-gap: 0.4rem;

  background: ${({ theme }) => theme.color.Grayscale['10']};

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.color.Grayscale['40']};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.color.Brown['40']};
  }
`;

const StImg = styled.img.attrs({
  tabIndex: -1,
})`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

const StInput = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  height: 100%;
  transition: color 250ms ease-in-out;

  padding: 0;

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.6rem;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 2.2rem; /* 137.5% */

  border: none;
  outline: none;
  resize: none;

  ${colorWhenTyping};
  ${colorWhenPlaceholder};
`;
