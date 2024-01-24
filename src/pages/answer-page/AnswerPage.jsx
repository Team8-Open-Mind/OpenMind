import Button from '@components/ui/atoms/Button/Button';
import FeedCard from '@components/ui/molecules/feed-card/FeedCard';
import FeedCardContainer from '@components/ui/molecules/feed-card/FeedCardContainer';

import { useConfirmAlert } from '@hooks/useConfirmAlert';

const AnswerPage = () => {
  const { showConfirm, ConfirmAlertComponent } = useConfirmAlert();

  const handleConfirm = () => {
    console.log('Confirmed!');
  };

  const handleCancel = () => {
    console.log('Cancelled!');
  };

  // feedcard type default가 null이다.
  // id 값이 주소에 있는 페이지라면? edit/reply
  return (
    <div>
      <FeedCardContainer cardLength={3}>
        <FeedCard type='edit' />
        <FeedCard type='read' />
        <FeedCard type='reply' />
      </FeedCardContainer>
      <Button onClickHandler={() => showConfirm(handleConfirm, handleCancel)}>전체 피드 삭제</Button>
      <ConfirmAlertComponent
        title='전체 피드가 삭제됩니다'
        content={`피드를 모두 삭제하시겠어요? \n 삭제된 피드는 복구할 수 없습니다.`}
      />
    </div>
  );
};

export default AnswerPage;
