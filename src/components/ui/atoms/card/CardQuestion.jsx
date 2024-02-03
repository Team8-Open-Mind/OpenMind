import styled from 'styled-components';

const CardQuestion = ({ questionContent }) => {
  return <StQuestionContent>{questionContent}</StQuestionContent>;
};

export default CardQuestion;

const StQuestionContent = styled.div`
  color: ${({ theme }) => theme.color.Grayscale[60]};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;
