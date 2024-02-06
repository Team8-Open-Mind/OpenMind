import { StCloseIcon } from '../sprite-icon/SpriteIcon';
import { useCardProvider } from './context/cardProvider';

const CardDeleteButton = ({ handleDeleteClick }) => {
  const { cardData } = useCardProvider();

  return (
    <>
      <button type='button' onClick={() => handleDeleteClick(cardData?.id)}>
        <StCloseIcon $color='gray60' $size={24} />
      </button>
    </>
  );
};

export default CardDeleteButton;
