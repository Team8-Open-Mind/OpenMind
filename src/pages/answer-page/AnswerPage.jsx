import styled from 'styled-components';

import Button from '@components/ui/atoms/Button/Button';
import ShareButton from '@components/ui/atoms/Button/share-button/ShareButton';
import FeedCardContainer from '@components/ui/molecules/feed-card/FeedCardContainer';

import { getAnswerLists } from '@api/answer/getAnswerLists';
import getUserData from '@api/getUserData';
import { useAsyncOnMount } from '@hooks/useAsyncOnMount';
import { useConfirmAlert } from '@hooks/useConfirmAlert';
import useSetUser from '@hooks/useSetUser';
import { useSNSShare } from '@hooks/useSNSShare';

const AnswerPage = () => {
  const { copyUrl, shareToFacebook, shareToKakaotalk } = useSNSShare();
  const { userName, userProfile, createdAt, questionCount } = useSetUser(getUserData);
  const { showConfirm, ConfirmAlertComponent } = useConfirmAlert();
  const [, , answerResults] = useAsyncOnMount(getAnswerLists);

  console.log(answerResults);

  const handleConfirm = () => {
    console.log('Confirmed!');
  };

  const handleCancel = () => {
    console.log('Cancelled!');
  };

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
      <Button onClickHandler={() => showConfirm(handleConfirm, handleCancel)}>전체 피드 삭제</Button>
      <ConfirmAlertComponent
        title='전체 피드가 삭제됩니다'
        content={`피드를 모두 삭제하시겠어요? \n 삭제된 피드는 복구할 수 없습니다.`}
      />
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
