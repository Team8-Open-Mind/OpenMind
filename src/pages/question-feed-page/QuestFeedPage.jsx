import styled from 'styled-components';

import Button from '@components/ui/atoms/Button/Button';
import PROFILE_SAMPLE from '@components/ui/atoms/profile-sample';
import FeedCardContainer from '@components/ui/molecules/feed-card/FeedCardContainer';
import NavBar from '@components/ui/molecules/nav-bar/NavBar';

const QuestFeedPage = ({ userProfile = PROFILE_SAMPLE, userName = '닉네임' }) => {
  return (
    <StBackground>
      <NavBar />
      <StQuestFeedPageWrapper>
        <img src={userProfile} alt='프로필' />
        <span className='pageName'>{userName}</span>
        <StSnsContainer />
      </StQuestFeedPageWrapper>
      <FeedCardContainer />

      <Button>질문 작성하기</Button>
    </StBackground>
  );
};

export default QuestFeedPage;

const StBackground = styled.div`
  background-color: ${({ theme }) => theme.color.Grayscale['20']};
  background-image: url('/image/background-image.png');
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-attachment: fixed;
`;

const StQuestFeedPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    display: flex;
    width: 136px;
    height: 136px;
    justify-content: center;
    align-items: center;
  }

  & .pageName {
    color: ${({ theme }) => theme.color.Grayscale['60']};
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 125% */
  }
`;

const StSnsContainer = styled.div`
  display: flex;
`;
