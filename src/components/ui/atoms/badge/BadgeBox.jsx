import styled from 'styled-components';

import { StCloseIcon } from '../sprite-icon/SpriteIcon';
import Badge from './Badge';

const BadgeBox = ({ handleDeleteConfirmAlert, path, onDeleteCard, onCancelDeleteCard, value, questionId }) => {
  const handleDeleteCard = () => onDeleteCard(questionId);

  const handleCancelDeleteCard = () => {
    onCancelDeleteCard();
  };

  const handleDeleteCardClick = () => {
    handleDeleteConfirmAlert(handleDeleteCard, handleCancelDeleteCard);
  };

  return (
    <>
      <StBadgeBox>
        <Badge value={value} />
        {path === 'answer' ? (
          <button type='button' onClick={handleDeleteCardClick}>
            <StCloseIcon $size={20} $color='gray60' />
          </button>
        ) : null}
      </StBadgeBox>
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
