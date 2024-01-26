import { useEffect, useState } from 'react';

import { patchAnswer } from '@api/answers/patchAnswer';
import { useAsync } from '@hooks/useAsync';

import Button from '../Button/Button';
import InputTextArea from '../input/input-text-area/InputTextArea';
import RejectReplyButton from '../reject-reply/RejectReplyButton';

const EditTypeBox = ({ toggleRerenderTrigger, editTextValue, editTypeState, questionId }) => {
  const { isEdit } = editTypeState;
  const [editValue, setEditValue] = useState(editTextValue);
  const [isDisabled, setIsDisabled] = useState(true);
  const { setAsyncFunction } = useAsync(patchAnswer);

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
    const res = await setAsyncFunction(questionId, editValue);
    toggleRerenderTrigger();

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
      <RejectReplyButton />
    </>
  );
};

export default EditTypeBox;
