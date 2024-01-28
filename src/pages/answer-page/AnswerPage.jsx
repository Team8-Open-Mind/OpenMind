import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import ShareButton from '@components/ui/atoms/Button/share-button/ShareButton';
import ScrollTopButton from '@components/ui/atoms/scroll-top/ScrollTopButton';
import FeedCardContainer from '@components/ui/molecules/feed-card/FeedCardContainer';
import NavBar from '@components/ui/molecules/nav-bar/NavBar';
import NoLists from '@pages/list-page/comp/list-contents/comp/no-lists/NoLists';

import { getAnswerLists } from '@api/answers/getAnswerLists';
import { deleteQuestion } from '@api/questions/deleteQuestion';
import getUserData from '@api/subjects/getUserData';
import { useAsync } from '@hooks/useAsync';
import { useAsyncOnMount } from '@hooks/useAsyncOnMount';
import { useCheckAuth } from '@hooks/useCheckAuth';
import useScrollToTop from '@hooks/useScrollToTop';
import { useSNSShare } from '@hooks/useSNSShare';
import { useToggle } from '@hooks/useToggle';

const AnswerPage = () => {
  const navigate = useNavigate();
  const { isUser, navigate: redirectUser } = useCheckAuth();
  const [rerenderTrigger, toggleRerenderTrigger] = useToggle();
  const { copyUrl, shareToFacebook, shareToKakaotalk } = useSNSShare();
  const userId = localStorage.getItem('userId');
  const { result: userInfo } = useAsyncOnMount(() => getUserData(userId), [userId, rerenderTrigger]);
  const { result: answerResults } = useAsyncOnMount(() => getAnswerLists({ userId }), [userId, rerenderTrigger]);
  const { setAsyncFunction: setDeleteCard } = useAsync(deleteQuestion);
  const [isVisible, handleScrollToTop] = useScrollToTop();

  const handleDeleteCard = async (id) => {
    await setDeleteCard(id);

    toggleRerenderTrigger();
  };

  useEffect(() => {
    if (!isUser) {
      redirectUser('/');
      alert('접근 권한이 없습니다.');
    }
  }, [isUser, redirectUser]);

  return (
    <StBackground>
      <NavBar />
      <StQuestFeedPageWrapper>
        <img className='user-profile' src={userInfo?.imageSource} alt='프로필' />
        <span className='pageName'>{userInfo?.name}</span>
        <StSnsWrapper>
          <ShareButton iconName='clipboard' onClickHandler={copyUrl} />
          <ShareButton iconName='kakao' onClickHandler={shareToKakaotalk} />
          <ShareButton iconName='facebook' onClickHandler={shareToFacebook} />
        </StSnsWrapper>
      </StQuestFeedPageWrapper>
      {userInfo?.questionCount === 0 ? (
        <NoLists>아직 질문이 없습니다</NoLists>
      ) : (
        <>
          <FeedCardContainer
            toggleRerenderTrigger={toggleRerenderTrigger}
            onDeleteCard={handleDeleteCard}
            cardLength={userInfo?.questionCount}
            userId={userId}
            userName={userInfo?.name}
            userProfile={userInfo?.imageSource}
            answerResults={answerResults?.results}
          />
          {isVisible ? <ScrollTopButton onClickHandler={handleScrollToTop} /> : null}
        </>
      )}
    </StBackground>
  );
};

export default AnswerPage;

const StBackground = styled.div`
  background-color: ${({ theme }) => theme.color.Grayscale['20']};
  background-image: url('/image/background-image.png');
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-attachment: fixed;
  padding-bottom: 142px;
  min-height: 100%;
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
    border-radius: 999px;
  }

  & .pageName {
    color: ${({ theme }) => theme.color.Grayscale['60']};
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
