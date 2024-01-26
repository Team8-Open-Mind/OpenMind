import { useEffect, useState } from 'react';

import { postAnswer } from '@api/answers/postAnswer';
import { useAsync } from '@hooks/useAsync';
import { useToggle } from '@hooks/useToggle';

import Button from '../Button/Button';
import InputTextArea from '../input/input-text-area/InputTextArea';
import RejectReplyButton from '../reject-reply/RejectReplyButton';

const ReplyBox = ({ toggleRerenderTrigger, questionId }) => {
  const [isReject, setIsReject] = useToggle();
  const [replyValue, setReplyValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const { setAsyncFunction: postAnswerAsync } = useAsync(postAnswer);

  const handleRejectClick = () => {
    setIsReject();
  };

  // const handleReplySubmitClick = async () => {
  //   const res = await postAnswerAsync();
  // };
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

  const handleReplySubmitClick = async () => {
    const res = await postAnswerAsync(questionId, replyValue, isReject);
    toggleRerenderTrigger();

    return res;
  };

  return (
    <>
      <InputTextArea onChangeHandler={handleReplyValue}>답변을 입력해주세요</InputTextArea>
      <Button theme='brown40' width='100%' disabled={isDisabled} onClickHandler={handleReplySubmitClick}>
        {questionId}
        답변 완료
      </Button>
      <RejectReplyButton type='submit' onClickHandler={handleRejectClick} isReject={isReject} />
    </>
  );
};

export default ReplyBox;
