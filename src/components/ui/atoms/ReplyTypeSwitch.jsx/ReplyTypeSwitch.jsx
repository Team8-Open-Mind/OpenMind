import EditTypeBox from '../edit-type-box/EditTypeBox';
import ReadTypeBox from '../question-box/ReadTypeBox';
import RejectedTypeBox from '../rejected-type-box/RejectedTypeBox';
import ReplyTypeBox from '../reply-type-box/ReplyTypeBox';

// reply, edit, read, rejected 상태 타입

const ReplyTypeSwitch = ({
  toggleRerenderTrigger,
  answerId,
  questionId,
  type,
  value,
  setEditTypeState,
  isRejected,
}) => {
  switch (type) {
    case 'reply':
      return (
        <ReplyTypeBox toggleRerenderTrigger={toggleRerenderTrigger} questionId={questionId} isRejected={isRejected} />
      );
    case 'rejected':
      return <RejectedTypeBox toggleRerenderTrigger={toggleRerenderTrigger} questionId={questionId} />;
    case 'edit':
      return (
        <EditTypeBox
          type={type}
          isRejected={isRejected}
          answerId={answerId}
          questionId={questionId}
          toggleRerenderTrigger={toggleRerenderTrigger}
          editTextValue={value}
          setEditTypeState={setEditTypeState}
        />
      );
    default:
      return <ReadTypeBox readTypeValue={value} />;
  }
};

export default ReplyTypeSwitch;
