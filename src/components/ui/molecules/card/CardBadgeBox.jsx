import styled from 'styled-components';

import Badge from '@components/ui/atoms/badge/Badge';
import { StCloseIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';

const CardBadgeBox = ({ value, handleDeleteCard }) => {
  return (
    <>
      <StBadgeBox>
        <Badge value={value} />
        <button type='button' onClick={handleDeleteCard}>
          <StCloseIcon $size={20} $color='gray60' />
        </button>
      </StBadgeBox>
    </>
  );
};

export default CardBadgeBox;

const StBadgeBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
