import { useEffect } from 'react';

import styled from 'styled-components';

import { useDropdownProvider } from './context/DropdownProvider';

/**
 *
 * @param {{ children: string | number; onSelect: VoidFunction; selected?: boolean; disabled?: boolean}} DropdownOptionProps
 */
const DropdownOption = ({ children, selected, disabled, onSelect }) => {
  const { setSelectedOption, toggleDropdown, isDropdownOpen } = useDropdownProvider();

  const onClickHandler = (selectedOptionText) => {
    if (!disabled) {
      if (typeof onSelect === 'function') onSelect(selectedOptionText);

      setSelectedOption(selectedOptionText);

      if (isDropdownOpen) toggleDropdown();
    }
  };

  useEffect(() => {
    if (selected && !disabled) setSelectedOption(children);
    // 맨 처음에만 호출
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <StDropdownOption onClick={() => onClickHandler(children)}>{children}</StDropdownOption>;
};

export default DropdownOption;

const StDropdownOption = styled.li`
  display: flex;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  width: 100%;
  padding: 0.6rem 1.6rem;

  color: ${({ theme }) => theme.color.Grayscale[50]};
  text-align: start;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem; /* 128.571% */

  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.Blue[50]};
  }
`;
