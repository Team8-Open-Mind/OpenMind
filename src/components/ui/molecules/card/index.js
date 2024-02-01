import CardAnswerBox from './CardAnswerBox';
import CardBadgeBox from './CardBadgeBox';
import CardBottomBox from './CardBottomBox';
import CardQuestionBox from './CardQuestionBox';
import CardProvider from './context/cardProvider';

const Card = Object.assign(CardProvider, {
  BadgeBox: CardBadgeBox,
  QuestionBox: CardQuestionBox,
  AnswerBox: CardAnswerBox,
  BottomBox: CardBottomBox,
});

export default Card;
