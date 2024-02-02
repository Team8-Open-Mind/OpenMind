import styled from 'styled-components';

import { timeStamp } from '@utils/time/timeStamp';

const CardElapsedTime = ({ createAt }) => {
  return <StElapsedTime>{timeStamp(createAt)}</StElapsedTime>;
};

export default CardElapsedTime;

const StElapsedTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;

  color: ${({ theme }) => theme.color.Grayscale[40]};
  font-size: 1.4rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
