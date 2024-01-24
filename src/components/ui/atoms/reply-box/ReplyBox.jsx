import { useEffect, useState } from 'react';

import styled from 'styled-components';

import Button from '../Button/Button';
import InputTextArea from '../input/input-text-area/InputTextArea';

const ReplyBox = () => {
  const [replyValue, setReplyValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (replyValue !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [replyValue]);

  const handleReplyValue = (event) => {
    setReplyValue(event.target.value);
  };

  return (
    <>
      <InputTextArea onChangeHandler={handleReplyValue}>답변을 입력해주세요</InputTextArea>
      <Button theme='brown40' width='100%' disabled={isDisabled}>
        답변 완료
      </Button>
      <StRejectButton>답변 거절하기</StRejectButton>
    </>
  );
};

export default ReplyBox;

const StRejectButton = styled.button`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 45px;
  color: ${({ theme }) => theme.color.Grayscale['40']};
  text-decoration: underline;
`;
