import styled from 'styled-components';

import Card from '@components/ui/atoms/card';
import ReplyTypeSwitch from '@components/ui/atoms/reply-type-switch/ReplyTypeSwitch';

const AnswerCardArea = ({ userInfo, cardData }) => {
  return (
    // todo: 시간이 된다면 필요로하는 함수들을 넣어서 기능하도록 만들어 줘 미래의 나야~~~
    <Card userInfo={userInfo} cardData={cardData}>
      <StFlexBox100>
        <Card.Badge />
        <Card.DeleteButton />
      </StFlexBox100>
      <StFlexColumnBox>
        <StFlexBox>
          <span>질문 · </span>
          <Card.QuestionElapsedTime />
        </StFlexBox>
        <Card.Question />
      </StFlexColumnBox>
      <StAnswerBox>
        <StProfile>
          <Card.ProfileImage />
        </StProfile>
        <StAnswer>
          <StFlexBox>
            <Card.Name />
            <Card.AnswerElapsedTime />
          </StFlexBox>
          <ReplyTypeSwitch />
        </StAnswer>
      </StAnswerBox>
      <StLine />
      <StFlexBox100>
        <Card.LikeButton />
        <Card.EditButton />
      </StFlexBox100>
    </Card>
  );
};

export default AnswerCardArea;

const StLine = styled.div`
  height: 1px;
  align-self: stretch;
  background: ${({ theme }) => theme.color.Grayscale[30]};
`;

const StFlexBox100 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StFlexColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StFlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 14px;
  }
`;

const StAnswerBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

const StProfile = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  overflow: hidden;
`;

const StAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: calc(100% - 60px);
`;
