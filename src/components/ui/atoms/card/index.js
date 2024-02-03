import CardAnswerBox from './CardAnswerBox';
import CardAnswerElapsedTime from './CardAnswerElapsedTime';
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
  QuestionElapsedTime: CardQuestionElapsedTime,
  AnswerElapsedTime: CardAnswerElapsedTime,
  ProfileImage: CardProfileImage,
  Name: CardNameBox,
  LikeButton: CardLikeButton,
  EditButton: CardEditButton,
  Question: CardQuestion,
  AnswerBox: CardAnswerBox,
});

export default Card;
