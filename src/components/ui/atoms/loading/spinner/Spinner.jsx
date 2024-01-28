import { dash, spin } from '@style/animation/spin';
import styled from 'styled-components';

const Spinner = ({ size = '50px' }) => (
  <StCenterAlign>
    <StSpinner $size={size} viewBox='0 0 50 50'>
      <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='5' />
    </StSpinner>
  </StCenterAlign>
);

export default Spinner;

const StCenterAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StSpinner = styled.svg`
  ${spin}
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};

  & .path {
    stroke: ${({ theme }) => theme.color.Brown[40]};
    stroke-linecap: round;
    ${dash}
  }
`;
