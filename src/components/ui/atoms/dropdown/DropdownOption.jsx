import { useEffect } from 'react';

import styled from 'styled-components';

import { useDropdownProvider } from './context/DropdownProvider';

/**
 *
 * @param {{ children: string | number; callbackFn: VoidFunction; selected?: boolean}} DropdownOptionProps
 */
const DropdownOption = ({ children, callbackFn, selected }) => {
  const { changeSelectedOption } = useDropdownProvider();

  const onClickHandler = () => {
    changeSelectedOption(children);

    if (typeof callbackFn === 'function') callbackFn(children);
  };

  useEffect(() => {
    if (selected) changeSelectedOption(children);
  }, [selected, changeSelectedOption, children]);

  return <StDropdownOption onClick={onClickHandler}>{children}</StDropdownOption>;
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
