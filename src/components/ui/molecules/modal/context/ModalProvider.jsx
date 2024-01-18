import { createContext, useContext } from 'react';

import { StBackground } from '../StBackground';

const ModalContext = createContext();

const Modal = ({ children }) => {
  return <ModalContext.Provider>{children}</ModalContext.Provider>;
};

export default Modal;

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) throw new Error('useModalContext는 ModalContextProvider 안에서 쓰여야 합니다!');

  return context;
};

Modal.StBackground = StBackground;
