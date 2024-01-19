import Bookmark from './Bookmark';
import CardCover from './CardCover';
import CardImage from './CardImage';
import CardProvider from './context/CardProvider';
import CreatedAt from './CreatedAt';
import Description from './Description';
import KebabButton from './KebabButton';
import TimeElapsed from './TimeElapsed';

const CardWrapper = Object.assign(CardProvider, {
  Description,
  CreatedAt,
  CardImage,
  TimeElapsed,
  CardCover,
  Bookmark,
  KebabButton,
});

export default CardWrapper;
