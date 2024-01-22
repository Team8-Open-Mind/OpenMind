import styled from 'styled-components';

const StToast = styled.div`
  display: inline-flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.Grayscale['60']};

  box-shadow: ${({ theme }) => theme.shadow['2pt']};

  color: ${({ theme }) => theme.color.Grayscale['10']};
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

const Toast = () => {
  return <StToast>URL이 복사되었습니다</StToast>;
};

export default Toast;
