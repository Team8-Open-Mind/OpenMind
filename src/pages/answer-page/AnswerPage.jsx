import styled from 'styled-components';

import Button from '@components/ui/atoms/Button/Button';
import ShareButton from '@components/ui/atoms/Button/share-button/ShareButton';
import FeedCardContainer from '@components/ui/molecules/feed-card/FeedCardContainer';

import { getAnswerLists } from '@api/answer/getAnswerLists';
import getUserData from '@api/getUserData';
import { useAsyncOnMount } from '@hooks/useAsyncOnMount';
import useSetUser from '@hooks/useSetUser';
import { useSNSShare } from '@hooks/useSNSShare';

const AnswerPage = () => {
  const { copyUrl, shareToFacebook, shareToKakaotalk } = useSNSShare();
  const { userName, userProfile, createdAt, questionCount } = useSetUser(getUserData);
  const [, , answerResults] = useAsyncOnMount(getAnswerLists);

  console.log(answerResults);

  // feedcard type default가 null이다.
  // id 값이 주소에 있는 페이지라면? edit/reply
  return (
    <div>
      <StQuestFeedPageWrapper>
        <img className='user-profile' src={userProfile} alt='프로필' />
        <span className='pageName'>{userName}</span>
        <StSnsWrapper>
          <ShareButton iconName='clipboard' onClickHandler={copyUrl} />
          <ShareButton iconName='kakao' onClickHandler={shareToKakaotalk} />
          <ShareButton iconName='facebook' onClickHandler={shareToFacebook} />
        </StSnsWrapper>
      </StQuestFeedPageWrapper>
      <FeedCardContainer cardLength={questionCount} answerResults={answerResults?.results} />
    </div>
  );
};

export default AnswerPage;

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
