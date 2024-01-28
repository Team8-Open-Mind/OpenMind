import styled from 'styled-components';

import BadgeBox from '@components/ui/atoms/badge/BadgeBox';
import AnswerBox from '@components/ui/atoms/question-box/AnswerBox';
import QuestionBox from '@components/ui/atoms/question-box/QuestionBox';

import { feedCardType } from '@utils/card-type/feedCardType';
import { timeStamp } from '@utils/time/timeStamp';

const FeedCard = ({ path, toggleRerenderTrigger, onDeleteCard, answerResult, userName, userProfile }) => {
  return (
    <StFeedCard>
      <BadgeBox
        path={path}
        onDeleteCard={onDeleteCard}
        value={feedCardType(answerResult?.answer)}
        questionId={answerResult?.id}
      />
      <QuestionBox question={answerResult?.content} elapsedTime={timeStamp(answerResult?.createdAt)} />
      <AnswerBox
        path={path}
        toggleRerenderTrigger={toggleRerenderTrigger}
        answerId={answerResult?.answer?.id}
        questionId={answerResult?.id}
        answerResult={answerResult}
        userProfile={userProfile}
        userName={userName}
      />
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
