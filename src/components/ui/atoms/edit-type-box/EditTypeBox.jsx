import { useEffect, useState } from 'react';

import Button from '../Button/Button';
import InputTextArea from '../input/input-text-area/InputTextArea';
import RejectReplyButton from '../reject-reply/RejectReplyButton';

const EditTypeBox = ({ editTextValue, editTypeState }) => {
  const { isEdit } = editTypeState;
  const [editValue, setEditValue] = useState(editTextValue);
  const [isDisabled, setIsDisabled] = useState(true);

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

  return (
    <>
      {isEdit}
      <InputTextArea onChangeHandler={handleReplyValue} value={editValue}>
        답변을 수정해 보세요.
      </InputTextArea>
      <Button 소듣='brown40' width='100%' disabled={isDisabled}>
        수정 완료
      </Button>
      <RejectReplyButton />
    </>
  );
};

export default EditTypeBox;
