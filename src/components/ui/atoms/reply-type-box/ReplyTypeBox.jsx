import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useToggle } from '@hooks/useToggle';

import Button from '../Button/Button';
import InputTextArea from '../input/input-text-area/InputTextArea';
import RejectReplyButton from '../reject-reply/RejectReplyButton';

const ReplyBox = () => {
  const [isReject, setIsReject] = useToggle();
  const [replyValue, setReplyValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleRejectClick = () => {
    setIsReject();
  };

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
      <RejectReplyButton onClickHandler={handleRejectClick} isReject={isReject} />
    </>
  );
};

export default ReplyBox;
