import styled from 'styled-components';

import FloatingWriteQuestionButton from '@components/ui/atoms/Button/floating-button/floating-write-question-button/FloatingWriteQuestionButton';
import ShareButton from '@components/ui/atoms/Button/share-button/ShareButton';
import PROFILE_SAMPLE from '@components/ui/atoms/profile-sample';
import FeedCardContainer from '@components/ui/molecules/feed-card/FeedCardContainer';
import NavBar from '@components/ui/molecules/nav-bar/NavBar';

import { useSNSShare } from '@hooks/useSNSShare';

const QuestFeedPage = ({ userProfile = PROFILE_SAMPLE, userName = '닉네임' }) => {
  const { copyUrl, shareToFacebook, shareToKakaotalk } = useSNSShare();

  return (
    <StBackground>
      <NavBar />
      <StQuestFeedPageWrapper>
        <img className='user-profile' src={userProfile} alt='프로필' />
        <span className='pageName'>{userName}</span>
        <StSnsWrapper>
          <ShareButton iconName='clipboard' onClickHandler={copyUrl} />
          <ShareButton iconName='kakao' onClickHandler={shareToKakaotalk} />
          <ShareButton iconName='facebook' onClickHandler={shareToFacebook} />
        </StSnsWrapper>
      </StQuestFeedPageWrapper>
      <FeedCardContainer />
      <FloatingWriteQuestionButton />
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
  padding-bottom: 142px;
`;

const StQuestFeedPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 54px;

  & .user-profile {
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

const StSnsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
