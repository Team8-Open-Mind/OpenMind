import EditTypeBox from '../edit-type-box/EditTypeBox';
import ReadTypeBox from '../question-box/ReadTypeBox';
import ReplyTypeBox from '../reply-type-box/ReplyTypeBox';

// reply, edit, read 상태 타입

const ReplyTypeSwitch = ({ type, value, editTypeState, isRejected }) => {
  switch (type) {
    case 'reply':
      return <ReplyTypeBox isRejected={isRejected} />;
    case 'edit':
      return <EditTypeBox editTextValue={value} editTypeState={editTypeState} />;
    default:
      return <ReadTypeBox readTypeValue={value} />;
  }
};

export default ReplyTypeSwitch;
