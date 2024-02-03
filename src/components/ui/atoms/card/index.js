import CardAnswerBox from './CardAnswerBox';
import CardEditButton from './CardEditButton';
import CardElapsedTime from './CardElapsedTime';
import CardLikeButton from './CardLikeButton';
import CardProfileImage from './CardProfileImage';
import CardQuestion from './CardQuestion';
import CardStateBadge from './CardStateBadge';
import CardNameBox from './CareNameBox';
import CardProvider from './context/cardProvider';

const Card = Object.assign(CardProvider, {
  Badge: CardStateBadge,
  ElapsedTime: CardElapsedTime,
  ProfileImage: CardProfileImage,
  Name: CardNameBox,
  LikeButton: CardLikeButton,
  EditButton: CardEditButton,
  Question: CardQuestion,
  AnswerBox: CardAnswerBox,
});

export default Card;
