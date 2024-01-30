import { useState } from 'react';

import { css, styled } from 'styled-components';

import PortalContainer from '@components/portal/Portal';
import ShareButton from '@components/ui/atoms/button/share-button/ShareButton';
import ScrollTopButton from '@components/ui/atoms/scroll-top/ScrollTopButton';
import Toast from '@components/ui/atoms/toast/Toast';
import FeedCardContainer from '@components/ui/molecules/feed-card/FeedCardContainer';
import NavBar from '@components/ui/molecules/nav-bar/NavBar';
import DocumentTitle from '@layout/document-title/DocumentTitle';
import NoLists from '@pages/list-page/comp/list-contents/comp/no-lists/NoLists';

import { getAnswerLists } from '@api/answers/getAnswerLists';
import { deleteQuestion } from '@api/questions/deleteQuestion';
import getUserData from '@api/subjects/getUserData';
import { useAsync } from '@hooks/useAsync';
import { useAsyncOnMount } from '@hooks/useAsyncOnMount';
import { useCloseModal } from '@hooks/useCloseModal';
import { useInView } from '@hooks/useInView';
import useScrollToTop from '@hooks/useScrollToTop';
import { useSNSShare } from '@hooks/useSNSShare';
import { getQueryStringObject } from '@utils/url/getQueryStringObject';

import { useAsync_V2 } from '../../hooks/useAsync_V2';

const AnswerPage = () => {
  const [requestType, setRequestType] = useState('mount'); // 'default' | 'mount' | 'delete' | 'deleteAll' | 'edit' | 'reply' ---> 전부 다 처음부터 불러올 거
  const [answerLists, setAnswerLists] = useState([]);
  const { copyUrl, shareToFacebook, shareToKakaotalk } = useSNSShare();
  const { intersectionObserveTargetRef, isIntersecting } = useInView();
  const [isVisible, handleScrollToTop] = useScrollToTop();
  const userId = localStorage.getItem('userId');
  const { isModalOpen, toggleModal } = useCloseModal();

  const [{ nextLimit, nextOffset }, setNext] = useState({
    nextOffset: 0,
    nextLimit: 10,
  });

  // 고정: 맨 mount 시에만 실행
  const { result: userInfo } = useAsyncOnMount(() => getUserData(userId), [userId, isIntersecting, requestType]);

  // mount랑 interset 때 실행
  useAsync_V2({
    deps: [isIntersecting, nextLimit, nextOffset, userId],
    asyncFn: () => {
      if (isIntersecting) {
        return getAnswerLists({ userId, limit: nextLimit, offset: nextOffset });
      }
    },
    onSuccess: (result) => {
      if (!result || result?.results?.length === 0) return;

      setAnswerLists((prev) => [...prev, ...result?.results]);

      if (result?.next) {
        const { limit, offset } = getQueryStringObject(result?.next);
        setNext({ nextLimit: limit, nextOffset: offset });
      } else {
        setNext((prev) => ({ nextOffset: prev.nextOffset + prev.nextLimit, nextLimit: 0 }));
      }
    },
  });

  // 위쪽 useAsync_V2의 interset, mount 때 동시 실행되어서 충돌 일어남. -> mount랑 default 때는 아래의 useAsync_V2이 실행하지 않도록 해야 함.
  // 그런데 rerenderTrigger는 여기저기 다 붙어 있어서 true일 때 불러야 하는지, false일 때 불러야 하는 지 true, false로 조건문 걸기가 힘듦.
  // 그래서 requestType으로 바꿔줘야 함.
  // delete, deleteAll, edit, reply 시에만 실행하도록 할 것임. -> 처음부터 다시 가져오도록 할 것임.
  // toggleRerenderTrigger()쓴 부분을 setRequestType('delete'); setRequestType('deleteAll'); 이런 식으로 바꿔주세요.
  useAsync_V2({
    deps: [userId, requestType],
    asyncFn: () => {
      // mount나 default 시에는 실행하지 않음.
      if (requestType === 'mount' || requestType === 'default') return;

      return getAnswerLists({ userId });
    },
    onSuccess: (result) => {
      if (!result || result?.results?.length === 0) return;

      setAnswerLists(result?.results);
      setRequestType('default');

      if (result?.next) {
        const { limit, offset } = getQueryStringObject(result?.next);
        setNext({ nextLimit: limit, nextOffset: offset });
      } else {
        setNext((prev) => ({ nextOffset: prev.nextOffset + prev.nextLimit, nextLimit: 0 }));
      }
    },
  });

  const { setAsyncFunction: setDeleteCard } = useAsync(deleteQuestion);

  const handleDeleteCard = async (id) => {
    await setDeleteCard(id);

    setRequestType('delete');
    toggleModal();
  };

  return (
    <>
      <DocumentTitle>답변하기 페이지</DocumentTitle>
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
              setRequestType={setRequestType}
              onDeleteCard={handleDeleteCard}
              cardLength={userInfo?.questionCount}
              userId={userId}
              userName={userInfo?.name}
              userProfile={userInfo?.imageSource}
              answerResults={answerLists}
              intersectionObserveTargetRef={intersectionObserveTargetRef}
            />
            <p
              ref={intersectionObserveTargetRef}
              css={css`
                position: relative;
                width: 100%;
                height: 0;
              `}
            />
            {isVisible ? <ScrollTopButton onClickHandler={handleScrollToTop} /> : null}
          </>
        )}
      </StBackground>
      <PortalContainer>{isModalOpen && <Toast closeModal={toggleModal}>삭제 되었습니다.</Toast>}</PortalContainer>
    </>
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
