import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { css, styled } from 'styled-components';

import PortalContainer from '@components/portal/Portal';
import FloatingWriteQuestionButton from '@components/ui/atoms/button/floating-button/floating-write-question-button/FloatingWriteQuestionButton';
import ShareButton from '@components/ui/atoms/button/share-button/ShareButton';
import ScrollTopButton from '@components/ui/atoms/scroll-top/ScrollTopButton';
import FeedCardContainer from '@components/ui/molecules/feed-card/FeedCardContainer';
import AddQuestionModal from '@components/ui/molecules/modal/AddQuestionModal';
import NavBar from '@components/ui/molecules/nav-bar/NavBar';
import DocumentTitle from '@layout/document-title/DocumentTitle';
import NoLists from '@pages/list-page/comp/list-contents/comp/no-lists/NoLists';

import { getAnswerLists } from '@api/answers/getAnswerLists';
import getUserData from '@api/subjects/getUserData';
import { useAsync_V2 } from '@hooks/useAsync_V2';
import { useAsyncOnMount } from '@hooks/useAsyncOnMount';
// import { useModalComponent } from '@hooks/useModalComponent';
import { useCloseModal } from '@hooks/useCloseModal';
import { useInView } from '@hooks/useInView';
import useScrollToTop from '@hooks/useScrollToTop';
import { useSNSShare } from '@hooks/useSNSShare';
import { getQueryStringObject } from '@utils/url/getQueryStringObject';

const QuestFeedPage = () => {
  const { copyUrl, shareToFacebook, shareToKakaotalk } = useSNSShare();
  const { id: userId } = useParams();

  const [requestType, setRequestType] = useState('mount'); // 'default' | 'mount' | 'delete' | 'deleteAll' | 'edit' | 'reply' ---> 전부 다 처음부터 불러올 거
  const [answerLists, setAnswerLists] = useState([]);
  const { intersectionObserveTargetRef, isIntersecting } = useInView();

  // const { userName, userProfile, createdAt, questionCount } = useSetUser(getUserData);
  const [isVisible, handleScrollToTop] = useScrollToTop();
  // const { isModalOpen, toggleAndSetModal, ModalComponent } = useModalComponent();
  const { isModalOpen, modalRef, toggleModal } = useCloseModal();

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

  return (
    <>
      <DocumentTitle>질문 모아보기 페이지</DocumentTitle>
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
          <NoLists type='feedPage'>아직 질문이 없습니다</NoLists>
        ) : (
          <>
            <FeedCardContainer
              cardLength={userInfo?.questionCount}
              onDeleteCard={null}
              userName={userInfo?.name}
              userProfile={userInfo?.imageSource}
              answerResults={answerLists}
              setRequestType={setRequestType}
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
          </>
        )}
        <FloatingWriteQuestionButton
          onClick={toggleModal}
          css={
            isVisible
              ? css`
                  right: 80px;
                `
              : null
          }
        />
        {isVisible ? <ScrollTopButton onClickHandler={handleScrollToTop} /> : null}
      </StBackground>
      <PortalContainer>
        {isModalOpen && (
          <AddQuestionModal
            userName={userInfo?.name}
            userProfile={userInfo?.imageSource}
            modalRef={modalRef}
            toggleModal={toggleModal}
          />
        )}
      </PortalContainer>
    </>
  );
};

export default QuestFeedPage;

export const StBackground = styled.div`
  background-color: ${({ theme }) => theme.color.Grayscale['20']};
  background-image: url('/image/background-image.png');
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-attachment: fixed;
  padding-bottom: 142px;
  padding: 20px;
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
