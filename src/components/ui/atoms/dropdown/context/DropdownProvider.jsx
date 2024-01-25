/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';

import { css } from 'styled-components';

import { useToggle } from '@hooks/useToggle';

const DropdownContext = createContext();

const DropdownProvider = ({ children }) => {
  const [isOpen, toggleIsOpen] = useToggle();
  const [selectedOption, setSelectedOption] = useState('최신순');

  const changeSelectedOption = (e) => {
    setSelectedOption(e.target.textContent);
    toggleIsOpen();
  };

  return (
    <DropdownContext.Provider value={{ isOpen, toggleIsOpen, selectedOption, changeSelectedOption }}>
      <div
        css={css`
          position: relative;
          display: flex;
          align-items: center;
        `}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;

export const useDropdownProvider = () => {
  const context = useContext(DropdownContext);

  if (context === undefined) throw new Error('useDropdownProvider는 DropdownProvider 내부에서만 사용할 수 있습니다.');

  return context;
};
