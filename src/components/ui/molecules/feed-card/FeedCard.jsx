import styled from 'styled-components';

import Badge from '@components/ui/atoms/Badge/Badge';
import EditButton from '@components/ui/atoms/Button/edit-button/EditButton';
import PROFILE_SAMPLE from '@components/ui/atoms/profile-sample';
import AnswerBox from '@components/ui/atoms/question-box/AnswerBox';
import QuestionBox from '@components/ui/atoms/question-box/QuestionBox';
import Reaction from '@components/ui/atoms/Reaction/Reaction';

import { useToggle } from '@hooks/useToggle';
import { feedCardType } from '@utils/feedCardType';
import { timeStamp } from '@utils/timeStamp';

const FeedCard = ({ answerResult }) => {
  const [isEdit, setIsEdit] = useToggle();

  const handleEditToggle = () => {
    setIsEdit();
  };

  return (
    <StFeedCard>
      <Badge value='null' isRejected={answerResult?.answer?.isRejected} />
      <QuestionBox question={answerResult?.content} elapsedTime={timeStamp(answerResult?.createdAt)} />
      <AnswerBox answer={answerResult?.answer} userName='이름 유저 정보에서' />
      <StBottom>
        <StLine />
        <StReactionAndEdit>
          <Reaction likeCount={answerResult?.like} />
          {feedCardType(answerResult?.answer) === 'edit' ? (
            <EditButton onClickEdit={handleEditToggle} isEdit={isEdit} />
          ) : null}
        </StReactionAndEdit>
      </StBottom>
    </StFeedCard>
  );
};

export default FeedCard;

const StFeedCard = styled.div`
  display: flex;
  width: 100%;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  margin-top: 16px;

  border-radius: 16px;
  background: ${({ theme }) => theme.color.Grayscale[10]};

  box-shadow: ${({ theme }) => theme.shadow[10]};
`;

const StBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const StReactionAndEdit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const StLine = styled.div`
  height: 1px;
  align-self: stretch;
  background: ${({ theme }) => theme.color.Grayscale[30]};
`;
