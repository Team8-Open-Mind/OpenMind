import CardAnswerElapsedTime from './CardAnswerElapsedTime';
import CardDeleteButton from './CardDeleteButton';
import CardEditButton from './CardEditButton';
import CardLikeButton from './CardLikeButton';
import CardProfileImage from './CardProfileImage';
import CardQuestion from './CardQuestion';
import CardQuestionElapsedTime from './CardQuestionElapsedTime';
import CardStateBadge from './CardStateBadge';
import CardNameBox from './CareNameBox';
import CardProvider from './context/cardProvider';

const Card = Object.assign(CardProvider, {
  Badge: CardStateBadge,
  DeleteButton: CardDeleteButton,
  QuestionElapsedTime: CardQuestionElapsedTime,
  AnswerElapsedTime: CardAnswerElapsedTime,
  ProfileImage: CardProfileImage,
  Name: CardNameBox,
  LikeButton: CardLikeButton,
  EditButton: CardEditButton,
  Question: CardQuestion,
});

export default Card;
