import CardAnswerBox from './CardAnswerBox';
import CardBadgeBox from './CardBadgeBox';
import CardQuestionBox from './CardQuestionBox';
import CardProvider from './context/cardProvider';

const Card = Object.assign(CardProvider, {
  BadgeBox: CardBadgeBox,
  QuestionBox: CardQuestionBox,
  AnswerBox: CardAnswerBox,
});

export default Card;
