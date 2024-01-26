import styled from 'styled-components';

const RejectedTypeBox = () => {
  return <StRejectedText>답변 거절</StRejectedText>;
};

export default RejectedTypeBox;

const StRejectedText = styled.p`
  color: ${({ theme }) => theme.color.Red[50]};
`;
