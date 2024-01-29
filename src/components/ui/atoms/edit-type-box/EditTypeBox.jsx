import { useEffect, useState } from 'react';

import { patchAnswer } from '@api/answers/patchAnswer';
import { useAsync } from '@hooks/useAsync';

import Button from '../button/Button';
import InputTextArea from '../input/input-text-area/InputTextArea';
import RejectReplyButton from '../reject-reply/RejectReplyButton';

const EditTypeBox = ({ setRequestType, editTextValue, answerId, setIsEdit }) => {
  const [editValue, setEditValue] = useState(editTextValue);
  const [isDisabled, setIsDisabled] = useState(true);
  const { setAsyncFunction } = useAsync(patchAnswer);
  const { setAsyncFunction: setAsyncEditRejectFunction } = useAsync(patchAnswer);

  useEffect(() => {
    if (editValue !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [editValue]);

  const handleReplyValue = (event) => {
    setEditValue(event.target.value);
  };

  const handleEditClick = async () => {
    const res = await setAsyncFunction(answerId, editValue);
    setRequestType('edit');
    setIsEdit(false);

    return res;
  };

  const handleEditRejectClick = async () => {
    const content = '내용을 입력해 답변하시거나 수정 취소 버튼을 눌러주세요.';
    const isRejected = true;
    const res = await setAsyncEditRejectFunction(answerId, content, isRejected);
    setRequestType('reject');
    setIsEdit(false);

    return res;
  };

  return (
    <>
      <InputTextArea onChangeHandler={handleReplyValue} value={editValue}>
        답변을 수정해 보세요.
      </InputTextArea>
      <Button theme='brown40' width='100%' disabled={isDisabled} type='button' onClickHandler={handleEditClick}>
        수정 완료
      </Button>
      <RejectReplyButton onClickHandle={handleEditRejectClick} />
    </>
  );
};

export default EditTypeBox;
