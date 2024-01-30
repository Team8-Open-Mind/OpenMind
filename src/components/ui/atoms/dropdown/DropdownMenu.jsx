import { boxShadow1pt } from '@style/box-shadow/boxShadow';
import styled from 'styled-components';

import { useDropdownProvider } from './context/DropdownProvider';

const DropdownMenu = ({ children, positionTop = '38', positionRight, width }) => {
  const { isOpen } = useDropdownProvider();

  return (
    <>
      {isOpen && (
        <StDropdownMenu $isOpen={isOpen} $width={width} $positionTop={positionTop} $positionRight={positionRight}>
          {children}
        </StDropdownMenu>
      )}
    </>
  );
};

export default DropdownMenu;

const StDropdownMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${({ $width }) => $width};
  padding: 0.4rem 0;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.color.Grayscale[30]};
  background: ${({ theme }) => theme.color.Grayscale[10]};

  /* 1pt */
  ${boxShadow1pt}

  position: absolute;
  top: ${({ $positionTop }) => $positionTop && `${$positionTop}px`};
  right: ${({ $positionRight }) => $positionRight && `${$positionRight}px`};

  list-style-type: none;
  margin: 0;
`;
