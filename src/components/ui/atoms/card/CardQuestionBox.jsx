import styled from 'styled-components';

const CardQuestionBox = ({ question, elapsedTime }) => {
  return (
    <StQuestion>
      <span>질문 · {elapsedTime}</span>
      <div>{question}</div>
    </StQuestion>
  );
};

export default CardQuestionBox;

const StQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;

  color: ${({ theme }) => theme.color.Grayscale[40]};
  font-size: 1.4rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  & div {
    color: ${({ theme }) => theme.color.Grayscale[60]};
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;
