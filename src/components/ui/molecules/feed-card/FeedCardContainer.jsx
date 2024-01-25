import styled from 'styled-components';

import { StMessageIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';

import FeedCard from './FeedCard';

const FeedCardContainer = ({ cardLength, answerResults }) => {
  return (
    <StFeedCardContainer>
      <StSubBox>
        <StLengthText>
          <StMessageIcon $size={24} $color='brown40' />
          {cardLength}개의 질문이 있습니다
        </StLengthText>
      </StSubBox>
      {answerResults?.map((answerResult) => {
        return <FeedCard key={answerResult.id} answerResult={answerResult} />;
      })}
    </StFeedCardContainer>
  );
};

export default FeedCardContainer;

const StFeedCardContainer = styled.div`
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 716px;
  margin: 0px auto;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.Brown['30']};
  background: ${({ theme }) => theme.color.Brown['10']};
`;

const StSubBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StLengthText = styled.h5`
  display: flex;
  align-items: center;
  gap: 1px;

  font-size: 2rem;
  font-weight: 400;

  color: ${({ theme }) => theme.color.Brown['40']};
`;
