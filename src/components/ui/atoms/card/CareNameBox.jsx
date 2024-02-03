import styled from 'styled-components';

import { useCardProvider } from './context/cardProvider';

const CardNameBox = () => {
  const { userInfo } = useCardProvider();

  return <StName>{userInfo?.name}</StName>;
};

export default CardNameBox;

const StName = styled.h5`
  color: ${({ theme }) => theme.color.Grayscale[60]};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;
