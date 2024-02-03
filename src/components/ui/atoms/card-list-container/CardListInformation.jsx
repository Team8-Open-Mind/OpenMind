import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import PortalContainer from '@components/portal/Portal';
import FloatingButton from '@components/ui/atoms/button/floating-button/FloatingButton';
import { StMessageIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';

import { deleteSubject } from '@api/subjects/deleteSubject';
import { useAsync } from '@hooks/useAsync';
import { useCheckAuth } from '@hooks/useCheckAuth';
import { useCloseModal } from '@hooks/useCloseModal';
import { useConfirmAlert } from '@hooks/useConfirmAlert';

import { useCardProvider } from '../card/context/cardProvider';
import Toast from '../toast/Toast';

const CardListInformation = ({ cardListInfo }) => {
  const { isModalOpen, toggleModal } = useCloseModal();
  const { setRequestType } = useCardProvider;
  const userId = localStorage.getItem('userId');
  const { isUser } = useCheckAuth();
  const { showConfirm, ConfirmAlertComponent } = useConfirmAlert();
  const { setAsyncFunction } = useAsync(deleteSubject);
  const navigate = useNavigate();

  const handleDeleteAllClick = async () => {
    showConfirm(handleDeleteAll, handleCancelDeleteAll);
  };

  const handleDeleteAll = async () => {
    try {
      if (isUser) {
        await setAsyncFunction(userId);
        setRequestType('deleteAll');
        localStorage.removeItem('userId', null);
        navigate('/', {
          state: { deleteAllSuccess: true },
        });
      } else {
        alert('삭제 권한이 없습니다.');
        navigate('/list');
      }
    } catch (error) {
      console.error('계정 삭제에 실패하였습니다.');
    }
  };

  const handleCancelDeleteAll = () => {
    toggleModal();
  };

  return (
    <>
      <StCardListInfoBox>
        <StCardListLength>
          <StMessageIcon $size={24} $color='brown40' />
          {cardListInfo?.questionCount}개의 질문이 있습니다
        </StCardListLength>
        <FloatingButton
          position='static'
          boxSizeOnResize={{ onMobile: { width: 10.3, height: 2.5 }, onPc: { width: 13, height: 3.5 } }}
          hasBoxShadow={false}
          onClick={handleDeleteAllClick}
        >
          내 마음 닫기
        </FloatingButton>
      </StCardListInfoBox>
      <PortalContainer>
        <ConfirmAlertComponent
          title='내 계정 정보가 모두 삭제됩니다'
          content={`정말로 마음을 닫으시겠어요? \n 삭제된 계정 정보와 피드는 복구할 수 없습니다.`}
        />
        {isModalOpen && <Toast closeModal={toggleModal}>취소 되었습니다.</Toast>}
      </PortalContainer>
    </>
  );
};

export default CardListInformation;

const StCardListInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StCardListLength = styled.h5`
  display: flex;
  align-items: center;
  gap: 1px;

  font-size: 2rem;
  font-weight: 400;

  color: ${({ theme }) => theme.color.Brown['40']};
`;
