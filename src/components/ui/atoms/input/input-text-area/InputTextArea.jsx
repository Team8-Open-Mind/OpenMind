import styled from 'styled-components';

import { colorOnPlaceholder, colorOnTyping } from '../color';
import { useAutoResize } from '../hooks/useAutoResize';
import { useCheckIsTyping } from '../hooks/useCheckIsTyping';

const InputTextArea = ({ onChangeHandler, value }) => {
  const { isTyping, startTyping, stopTyping } = useCheckIsTyping();
  const { textBoxRef, handleResizeHeight } = useAutoResize();

  const handleOnInput = () => {
    startTyping();
    handleResizeHeight();
  };

  return (
    <StTextarea
      ref={textBoxRef}
      value={value}
      $isTyping={isTyping}
      placeholder='이름을 입력하세요'
      onChange={onChangeHandler}
      onInput={handleOnInput}
      onKeyUp={stopTyping}
      rows={1}
    />
  );
};

export default InputTextArea;

const StTextarea = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 14rem;
  padding: 1.6rem;

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.6rem;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 2.2rem; /* 137.5% */

  transition: color 250ms ease-in-out;

  box-sizing: border-box;
  resize: none;
  background: ${({ theme }) => theme.color.Grayscale['20']};
  border-radius: 0.8rem;
  border: 1px solid transparent;

  &:focus {
    border-color: ${({ theme }) => theme.color.Brown['40']};
  }

  ${colorOnTyping};
  ${colorOnPlaceholder};

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
