import styled from 'styled-components';

const RejectedTypeBox = ({ onClickHandler }) => {
  return <StRejectedText onClick={onClickHandler}>답변 거절</StRejectedText>;
};

export default RejectedTypeBox;

const StRejectedText = styled.p`
  color: ${({ theme }) => theme.color.Red[50]};
`;
