import EditTypeBox from '../edit-type-box/EditTypeBox';
import ReadTypeBox from '../question-box/ReadTypeBox';
import RejectedTypeBox from '../rejected-type-box/RejectedTypeBox';
import ReplyTypeBox from '../reply-type-box/ReplyTypeBox';

// reply, edit, read, rejected 상태 타입

const ReplyTypeSwitch = ({
  setRequestType,
  answerId,
  questionId,
  type,
  value,
  setEditTypeState,
  isRejected,
  setIsEdit,
}) => {
  switch (type) {
    case 'reply':
      return (
        <ReplyTypeBox
          setRequestType={setRequestType}
          questionId={questionId}
          answerId={answerId}
          isRejected={isRejected}
        />
      );
    case 'rejected':
      return <RejectedTypeBox />;
    case 'edit':
      return (
        <EditTypeBox
          setIsEdit={setIsEdit}
          type={type}
          isRejected={isRejected}
          answerId={answerId}
          questionId={questionId}
          setRequestType={setRequestType}
          editTextValue={value}
          setEditTypeState={setEditTypeState}
        />
      );
    default:
      return <ReadTypeBox readTypeValue={value} />;
  }
};

export default ReplyTypeSwitch;
