import styled from 'styled-components';

import Badge from '@components/ui/atoms/badge/Badge';
import { StCloseIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';

import { feedCardType } from '@utils/card-type/feedCardType';

import { useCardProvider } from './context/cardProvider';

const CardBadgeBox = ({ handleDeleteCard }) => {
  const { cardData } = useCardProvider();

  return (
    <>
      <StBadgeBox>
        <Badge value={feedCardType(cardData?.answer)} />
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
