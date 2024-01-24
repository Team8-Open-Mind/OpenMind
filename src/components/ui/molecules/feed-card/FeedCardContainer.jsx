import styled from 'styled-components';

import FeedCard from './FeedCard';

const FeedCardContainer = () => {
  return (
    <StFeedCardContainer>
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </StFeedCardContainer>
  );
};

export default FeedCardContainer;

const StFeedCardContainer = styled.div`
  max-width: 716px;
  display: flex;
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
