import styled from 'styled-components';

const RejectReplyButton = ({ onClickHandle }) => {
  return (
    <StRejectButton type='button' onClick={onClickHandle}>
      답변 거절하기
    </StRejectButton>
  );
};

export default RejectReplyButton;

const StRejectButton = styled.button`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 45px;
  color: ${({ theme }) => theme.color.Grayscale['40']};
  text-decoration: underline;
`;
