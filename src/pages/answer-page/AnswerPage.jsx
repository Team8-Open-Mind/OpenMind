import { useEffect, useState } from 'react';

import styled from 'styled-components';

import Button from '@components/ui/atoms/Button/Button';
import ShareButton from '@components/ui/atoms/Button/share-button/ShareButton';
import ScrollTopButton from '@components/ui/atoms/scroll-top/ScrollTopButton';
import FeedCardContainer from '@components/ui/molecules/feed-card/FeedCardContainer';
import NavBar from '@components/ui/molecules/nav-bar/NavBar';
import NoLists from '@pages/list-page/comp/list-contents/comp/no-lists/NoLists';

import { getAnswerLists } from '@api/answers/getAnswerLists';
import getUserData from '@api/getUserData';
import { deleteQuestion } from '@api/questions/deleteQuestion';
import { useAsync } from '@hooks/useAsync';
import { useAsyncOnMount } from '@hooks/useAsyncOnMount';
import useScrollToTop from '@hooks/useScrollToTop';
import useSetUser from '@hooks/useSetUser';
import { useSNSShare } from '@hooks/useSNSShare';

const AnswerPage = () => {
  const [answerResults, setAnswerResults] = useState([]);
  const { copyUrl, shareToFacebook, shareToKakaotalk } = useSNSShare();
  const { userName, userProfile, createdAt, questionCount } = useSetUser(getUserData);
  const [, , answer] = useAsyncOnMount(getAnswerLists, [answerResults]);
  const [, , , setDeleteCard] = useAsync(deleteQuestion);
  const [isVisible, handleScrollToTop] = useScrollToTop();

  // console.log(answerResults);
  const handleDeleteCard = async (id) => {
    const delCardResult = await setDeleteCard(id);

    if (!delCardResult) return;

    setAnswerResults((prevItems) => prevItems.filter((item) => item.results.id !== id));
  };

  useEffect(() => {
    setAnswerResults(answer);
  }, [answer]);

  useEffect(() => {
    console.log(answerResults);
  }, [answerResults]);

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
      <>
        <FeedCardContainer
          onDeleteCard={handleDeleteCard}
          cardLength={questionCount}
          answerResults={answerResults?.results}
        />
        {isVisible ? <ScrollTopButton onClickHandler={handleScrollToTop} /> : null}
      </>
      {/* {questionCount === 0 ? (
        <NoLists>아직 질문이 없습니다</NoLists>
      ) : (

      )} */}
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
