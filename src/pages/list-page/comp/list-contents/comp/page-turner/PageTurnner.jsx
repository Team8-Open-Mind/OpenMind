import { device } from '@device/mediaBreakpoints';
import styled, { css } from 'styled-components';

import { ReactComponent as LeftArrow } from '@assets/left-arrow.svg';
import { ReactComponent as RightArrow } from '@assets/right-arrow.svg';

const PageTurnner = ({ result }) => {
  return (
    <StPageTurnner>
      <StIconAlignBox>
        <StLeftArrow width={8} height={9} />
      </StIconAlignBox>
      {Array.from({ length: Math.min(5, Math.ceil(result?.count / 8)) }, (_, i) => i + 1).map((v) => (
        <StPaginationNumberBox key={v}>{v}</StPaginationNumberBox>
      ))}
      <StIconAlignBox>
        <StRightArrow width={8} height={9} />
      </StIconAlignBox>
    </StPageTurnner>
  );
};

export default PageTurnner;

const StIconAlignBox = styled.div`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StPaginationNumberBox = styled.button`
  @import url('/custom-font/actor/actor.css');

  display: flex;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: ${({ theme }) => theme.color.Grayscale[40]};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Actor', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem; /* 125% */
  &:hover {
    color: ${({ theme }) => theme.color.Brown[40]};
  }
`;

const arrowIconTheme = css`
  cursor: pointer;
  fill: ${({ theme }) => theme.color.Grayscale[40]};

  &:hover {
    fill: ${({ theme }) => theme.color.Brown[40]};
  }
`;

const StLeftArrow = styled(LeftArrow)`
  ${arrowIconTheme}
`;

const StRightArrow = styled(RightArrow)`
  ${arrowIconTheme}
`;

const StPageTurnner = styled.div`
  display: flex;
  align-items: center;
  margin-inline: auto;
  text-align: center;
  width: fit-content;
  margin-inline: auto;

  padding-bottom: 3.9rem;

  @media ${device.tablet} {
    padding-bottom: 7.6rem;
  }

  /* 18.6rem(width) * 4 + 3.2rem(padding) * 2 + 2rem(gap) * 3 = 86.8rem */
  @media screen and (min-width: 868px) {
    padding-bottom: 9.1rem;
  }

  @media ${device.pc} {
    padding-bottom: 9.7rem;
  }
`;
