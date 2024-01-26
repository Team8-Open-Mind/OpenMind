import EditTypeBox from '../edit-type-box/EditTypeBox';
import ReadTypeBox from '../question-box/ReadTypeBox';
import RejectedTypeBox from '../rejected-type-box/RejectedTypeBox';
import ReplyTypeBox from '../reply-type-box/ReplyTypeBox';

// reply, edit, read, rejected 상태 타입

const ReplyTypeSwitch = ({ toggleRerenderTrigger, questionId, type, value, editTypeState, isRejected }) => {
  switch (type) {
    case 'reply':
      return (
        <ReplyTypeBox toggleRerenderTrigger={toggleRerenderTrigger} questionId={questionId} isRejected={isRejected} />
      );
    case 'rejected':
      return <RejectedTypeBox />;
    case 'edit':
      return (
        <EditTypeBox
          isRejected={isRejected}
          questionId={questionId}
          toggleRerenderTrigger={toggleRerenderTrigger}
          editTextValue={value}
          editTypeState={editTypeState}
        />
      );
    default:
      return <ReadTypeBox readTypeValue={value} />;
  }
};

export default ReplyTypeSwitch;
