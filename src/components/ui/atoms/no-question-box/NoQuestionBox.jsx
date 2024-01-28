import styled from 'styled-components';

import { StMessageIcon } from '../sprite-icon/SpriteIcon';

const StNoQuestionBox = styled.div`
  display: flex;
  width: 716px;
  height: 330px;
  padding: 16px 24px;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.Brown['20']};
  background: ${({ theme }) => theme.color.Brown['10']};

  position: relative;

  color: ${({ theme }) => theme.color.Brown['40']};
  font-family: Actor;
  font-size: 2rem;
  font-weight: 400;
  line-height: 25px;
  & img {
    position: absolute;
    width: 150px;
    top: 50%;
    left: 50%;
    margin-left: -75px;
    margin-top: -75px;
  }
`;

const NoQuestionBox = () => {
  return (
    <StNoQuestionBox>
      <StMessageIcon size={24} color='brown40' />
      <span>아직 질문이 없습니다</span>
      <img src='/image/empty-box-image.svg' alt='빈 질문박스' />
    </StNoQuestionBox>
  );
};

export default NoQuestionBox;
