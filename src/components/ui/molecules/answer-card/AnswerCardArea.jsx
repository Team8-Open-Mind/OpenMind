import styled from 'styled-components';

import Card from '@components/ui/atoms/card';
import ReplyTypeSwitch from '@components/ui/atoms/reply-type-switch/ReplyTypeSwitch';

const AnswerCardArea = ({ userInfo, cardData }) => {
  return (
    // todo: 시간이 된다면 필요로하는 함수들을 넣어서 기능하도록 만들어 줘 미래의 나야~~~
    <Card userInfo={userInfo} cardData={cardData}>
      <Card.Badge />
      <Card.DeleteButton />
      <Card.QuestionElapsedTime />
      <Card.Question />
      <Card.ProfileImage />
      <Card.Name />
      <Card.AnswerElapsedTime />
      <ReplyTypeSwitch />
      <StLine />
      <Card.LikeButton />
      <Card.EditButton />
    </Card>
  );
};

export default AnswerCardArea;

const StLine = styled.div`
  height: 1px;
  align-self: stretch;
  background: ${({ theme }) => theme.color.Grayscale[30]};
`;
