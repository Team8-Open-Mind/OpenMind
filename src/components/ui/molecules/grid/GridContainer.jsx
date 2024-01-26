import { device } from '@device/mediaBreakpoints';
import styled from 'styled-components';

const GridContainer = ({ children }) => {
  return (
    <StGridWrapper>
      <StGridContainer>{children}</StGridContainer>
    </StGridWrapper>
  );
};

export default GridContainer;

const StGridWrapper = styled.div`
  width: 100%;
  /* height: 100%; */ /* GridItem 내부의 컨텐츠 배치와 크기도 다 조절해야 하기 때문에 얘는 제외. 아니면 aspect-ratio 활용하든가 */
  padding: 1.8rem 2.4rem 3.1rem;

  @media ${device.tablet} {
    padding: 3rem 3.2rem 6.1rem;
  }

  /* 18.6rem(width) * 4 + 3.2rem(padding) * 2 + 2rem(gap) * 3 = 86.8rem */
  @media screen and (min-width: 868px) {
    padding: 3rem 3.2rem 4.6rem;
  }

  @media ${device.pc} {
    padding: 3rem 3.2rem 4rem;
  }
`;

const StGridContainer = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template: repeat(4, minmax(16.8rem, 1fr)) / repeat(2, minmax(15.55rem, 1fr)); /* 높이 fix 해버림 */

  width: 100%; /* fit-content로 통일하려다가 100%를 나눠가지는게 자연스러워 보여서 납둠 */
  height: 100%;
  margin-inline: auto;

  @media ${device.tablet} {
    width: fit-content;
    gap: 2rem;
    grid-template: repeat(3, 18.7rem) / repeat(3, minmax(22rem, 1fr));
  }

  /* 18.6rem(width) * 4 + 3.2rem(padding) * 2 + 2rem(gap) * 3 = 86.8rem */
  @media screen and (min-width: 868px) {
    grid-template: repeat(2, 18.7rem) / repeat(4, minmax(18.6rem, 22rem));
  }

  @media ${device.pc} {
    grid-template: repeat(2, 18.7rem) / repeat(4, 22rem);
  }
`;
