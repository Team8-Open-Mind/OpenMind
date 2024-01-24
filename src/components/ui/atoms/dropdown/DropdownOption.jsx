import styled from 'styled-components';

import { useDropdownProvider } from './context/DropdownProvider';

const DropdownOption = ({ children, callbackFn }) => {
  const { changeSelectedOption } = useDropdownProvider();

  const onClickHandler = (e) => {
    changeSelectedOption(e);

    if (typeof callbackFn === 'function') callbackFn(e);
  };

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
