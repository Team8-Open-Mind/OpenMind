import EditTypeBox from '../edit-type-box/EditTypeBox';
import ReadTypeBox from '../question-box/ReadTypeBox';
import ReplyTypeBox from '../reply-type-box/ReplyTypeBox';

const ReplyTypeSwitch = ({ type, value, editTypeState }) => {
  switch (type) {
    case 'reply':
      return <ReplyTypeBox />;
    case 'edit':
      return <EditTypeBox editTextValue={value} editTypeState={editTypeState} />;
    default:
      return <ReadTypeBox readTypeValue={value} />;
  }
};

export default ReplyTypeSwitch;
