import styled from 'styled-components';

import Card from '@components/ui/atoms/card';
import ReplyTypeSwitch from '@components/ui/atoms/reply-type-switch/ReplyTypeSwitch';

const AnswerCardArea = ({ userInfo, cardData, setRequestType, handleDeleteClick }) => {
  return (
    // todo: 이제 슬슬 기능을 넣어주라 미래의 나야~! 빨리 하고 타입스크립트 좀 해 ㅜㅜ
    <Card userInfo={userInfo} cardData={cardData} setRequestType={setRequestType}>
      <StFlexBox100>
        <Card.Badge />
        <Card.DeleteButton handleDeleteClick={handleDeleteClick} />
      </StFlexBox100>
      <StFlexColumnBox>
        <StFlexBox>
          <span>질문 ·</span>
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
