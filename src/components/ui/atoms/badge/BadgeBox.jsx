import styled from 'styled-components';

import PortalContainer from '@components/portal/Portal';

import { useCloseModal } from '@hooks/useCloseModal';
import { useConfirmAlert } from '@hooks/useConfirmAlert';

import { StCloseIcon } from '../sprite-icon/SpriteIcon';
import Toast from '../toast/Toast';
import Badge from './Badge';

const BadgeBox = ({ path, onDeleteCard, value, questionId }) => {
  const { showConfirm, ConfirmAlertComponent } = useConfirmAlert();
  const { isModalOpen, toggleModal } = useCloseModal();

  const handleDeleteCardClick = () => onDeleteCard(questionId);

  const handleCancelDeleteCardClick = () => {
    toggleModal();
  };

  const handleDeleteClick = () => {
    showConfirm(handleDeleteCardClick, handleCancelDeleteCardClick);
  };

  return (
    <>
      <StBadgeBox>
        <Badge value={value} />
        {path === 'answer' ? (
          <button type='button' onClick={handleDeleteClick}>
            <StCloseIcon $size={20} $color='gray60' />
          </button>
        ) : null}
      </StBadgeBox>
      <PortalContainer>
        <ConfirmAlertComponent title='선택하신 질문 카드가 삭제됩니다' content='삭제된 피드는 복구할 수 없습니다.' />
        {isModalOpen && <Toast closeModal={toggleModal}>취소 되었습니다.</Toast>}
      </PortalContainer>
    </>
  );
};

export default BadgeBox;

const StBadgeBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
