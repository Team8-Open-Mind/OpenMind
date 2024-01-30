import { useEffect, useState } from 'react';

import { css, keyframes, styled } from 'styled-components';

const Toast = ({ closeModal, children }) => {
  const [show, setShow] = useState(true);
  console.log(show);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setShow(false);
      closeModal();
    }, 4000);

    return () => clearTimeout(timerId);
  }, [closeModal]);

  return <StToast $show={show}>{children}</StToast>;
};

export default Toast;

const fadein = keyframes`
  from { opacity: 0; transform: translate(-50%, 30px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`;

const fadeout = keyframes`
  from { opacity: 1; transform: translate(-50%, 0); }
  to { opacity: 0; transform: translate(-50%, 30px); }
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
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;

  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);

  animation: ${(props) =>
    props.$show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 3.5s
        `
      : 'none'};

  @media (max-width: 767px) {
    bottom: 100px;
  }
`;
