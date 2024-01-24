import { useCallback, useEffect } from 'react';

import { css, keyframes, styled } from 'styled-components';

const Toast = ({ closeModal, toastMessage }) => {
  const handleToastOpen = useCallback(() => {
    setTimeout(() => {
      closeModal();
    }, 4000);
  }, [closeModal]);

  useEffect(() => {
    handleToastOpen();
  }, [handleToastOpen]);

  return <StToast>{toastMessage}</StToast>;
};

export default Toast;

const fadein = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeout = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(30px); }
`;

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

  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, 0);

  animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : 'none'};

  @media (max-width: 767px) {
    bottom: 100px;
  }
`;
