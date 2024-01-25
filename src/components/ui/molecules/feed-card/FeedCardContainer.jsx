import styled from 'styled-components';

import PortalContainer from '@components/portal/Portal';
import FloatingButton from '@components/ui/atoms/Button/floating-button/FloatingButton';
import { StMessageIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';

import { useConfirmAlert } from '@hooks/useConfirmAlert';

import FeedCard from './FeedCard';

const FeedCardContainer = ({ cardLength, userName, userProfile, answerResults }) => {
  const { showConfirm, ConfirmAlertComponent } = useConfirmAlert();

  const handleDeleteAllClick = () => {
    console.log('Confirmed!');
  };

  const handleCancelDeleteAllClick = () => {
    console.log('Cancelled!');
  };

  const handleDeleteClick = () => {
    showConfirm(handleDeleteAllClick, handleCancelDeleteAllClick);
  };

  return (
    <>
      <StFeedCardContainer>
        <StSubBox>
          <StLengthText>
            <StMessageIcon $size={24} $color='brown40' />
            {cardLength}개의 질문이 있습니다
          </StLengthText>
          <FloatingButton
            position='static'
            boxSizeOnResize={{ onMobile: { width: 10.3, height: 2.5 }, onPc: { width: 13, height: 3.5 } }}
            onClickHandler={handleDeleteClick}
            hasBoxShadow={false}
          >
            전체 피드 삭제
          </FloatingButton>
        </StSubBox>
        {answerResults?.map((answerResult) => {
          return (
            <FeedCard key={answerResult.id} answerResult={answerResult} userName={userName} userProfile={userProfile} />
          );
        })}
      </StFeedCardContainer>
      <PortalContainer>
        <ConfirmAlertComponent
          title='전체 피드가 삭제됩니다'
          content={`피드를 모두 삭제하시겠어요? \n 삭제된 피드는 복구할 수 없습니다.`}
        />
      </PortalContainer>
    </>
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
