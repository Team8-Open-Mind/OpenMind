import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import PortalContainer from '@components/portal/Portal';
import FloatingButton from '@components/ui/atoms/button/floating-button/FloatingButton';
import { StMessageIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';
import Toast from '@components/ui/atoms/toast/Toast';

import { deleteSubject } from '@api/subjects/deleteSubject';
import { useAsync } from '@hooks/useAsync';
import { useCheckAnswerPath } from '@hooks/useCheckAnswerPath';
import { useCloseModal } from '@hooks/useCloseModal';
import { useConfirmAlert } from '@hooks/useConfirmAlert';

import FeedCard from './FeedCard';

const FeedCardContainer = ({
  onDeleteCard,
  cardLength,
  userName,
  userProfile,
  answerResults,
  userId,
  setRequestType,
}) => {
  const { isModalOpen, toggleModal } = useCloseModal();
  const { isDeleteOpen, toggleDeleteCard } = useCloseModal();
  const { showConfirm, ConfirmAlertComponent } = useConfirmAlert();
  const { setAsyncFunction } = useAsync(deleteSubject);
  const navigate = useNavigate();
  const { path } = useCheckAnswerPath();

  const handleDeleteAllClick = async () => {
    await setAsyncFunction(userId);
    setRequestType('deleteAll');

    localStorage.removeItem('userId', null);
    navigate('/');
  };

  const handleCancelDeleteAllClick = () => {
    toggleModal();
  };

  const handleDeleteClick = async () => {
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
          {path === 'answer' ? (
            <FloatingButton
              position='static'
              boxSizeOnResize={{ onMobile: { width: 10.3, height: 2.5 }, onPc: { width: 13, height: 3.5 } }}
              onClickHandler={handleDeleteClick}
              hasBoxShadow={false}
            >
              내 마음 닫기
            </FloatingButton>
          ) : null}
        </StSubBox>
        {answerResults?.map((answerResult) => {
          return (
            <FeedCard
              setRequestType={setRequestType}
              onDeleteCard={onDeleteCard}
              key={answerResult.id}
              answerResult={answerResult}
              userName={userName}
              userProfile={userProfile}
              path={path}
            />
          );
        })}
      </StFeedCardContainer>
      <PortalContainer>
        <ConfirmAlertComponent
          title='내 계정 정보가 모두 삭제됩니다'
          content={`정말로 마음을 닫으시겠어요? \n 삭제된 계정 정보와 피드는 복구할 수 없습니다.`}
        />
        {isModalOpen && <Toast closeModal={toggleModal}>취소 되었습니다.</Toast>}
        {isDeleteOpen && <Toast closeModal={toggleDeleteCard}>삭제 되었습니다.</Toast>}
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
