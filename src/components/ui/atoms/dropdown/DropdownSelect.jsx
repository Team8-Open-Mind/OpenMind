import styled from 'styled-components';

import { StDownIcon, StUpIcon } from '../sprite-icon/SpriteIcon';
import { useDropdownProvider } from './context/DropdownProvider';

const DropdownSelect = () => {
  const { toggleIsOpen, isOpen, selectedOption } = useDropdownProvider();

  return (
    <StDropdownSelect onClick={toggleIsOpen} $isOpen={isOpen}>
      {selectedOption}
      {isOpen ? (
        <StFlex>
          <StUpIcon $size={14} $color='gray60' />
        </StFlex>
      ) : (
        <StFlex>
          <StDownIcon $size={14} $color='gray40' />
        </StFlex>
      )}
    </StDropdownSelect>
  );
};

export default DropdownSelect;

const StDropdownSelect = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;

  width: 7.9rem;
  padding: 0.8rem 1.2rem;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme, $isOpen }) => ($isOpen ? theme.color.Grayscale[60] : theme.color.Grayscale[40])};
  background: ${({ theme }) => theme.color.Grayscale[10]};

  color: ${({ theme, $isOpen }) => ($isOpen ? theme.color.Grayscale[60] : theme.color.Grayscale[40])};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem; /* 128.571% */
  white-space: nowrap;

  :hover {
    border: ${({ theme }) => theme.color.Grayscale[60]};
  }
`;

const StFlex = styled.div`
  display: flex;
`;
