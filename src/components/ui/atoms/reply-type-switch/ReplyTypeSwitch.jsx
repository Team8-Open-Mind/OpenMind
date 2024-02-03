import { useCardProvider } from '@components/ui/atoms/card/context/cardProvider';

import { feedCardType } from '@utils/card-type/feedCardType';

import EditTypeBox from '../edit-type-box/EditTypeBox';
import ReadTypeBox from '../question-box/ReadTypeBox';
import RejectedTypeBox from '../rejected-type-box/RejectedTypeBox';
import ReplyTypeBox from '../reply-type-box/ReplyTypeBox';

// reply, edit, read, rejected 상태 타입

const ReplyTypeSwitch = () => {
  const { cardData, isEdit } = useCardProvider();
  switch (isEdit ? 'edit' : feedCardType(cardData?.answer)) {
    case 'reply':
      return <ReplyTypeBox />;
    case 'rejected':
      return <RejectedTypeBox />;
    case 'edit':
      return <EditTypeBox />;
    default:
      return <ReadTypeBox />;
  }
};

export default ReplyTypeSwitch;
