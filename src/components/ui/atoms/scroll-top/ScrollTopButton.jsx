import styled from 'styled-components';

import { StUpIcon } from '../sprite-icon/SpriteIcon';

const ScrollTopButton = ({ onClickHandler }) => {
  return (
    <>
      <StScrollTopButton onClick={onClickHandler} type='button'>
        <StUpIcon $size={28} $color='gray50' />
      </StScrollTopButton>
    </>
  );
};

export default ScrollTopButton;

const StScrollTopButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 30px;

  border-radius: 50px;
  padding: 8px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.color.Grayscale[20]};
  box-shadow: ${({ theme }) => theme.shadow['1pt']};
`;
