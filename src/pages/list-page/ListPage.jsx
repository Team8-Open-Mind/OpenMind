import { useNavigate } from 'react-router-dom';

import { device } from '@device/mediaBreakpoints';
import styled, { css } from 'styled-components';

import { ReactComponent as LeftArrow } from '@assets/left-arrow.svg';
import { ReactComponent as RightArrow } from '@assets/right-arrow.svg';
import Button from '@components/ui/atoms/Button/Button';
import ArrowDropdown from '@components/ui/atoms/dropdown/arrow-dropdown/ArrowDropdown';
import Logo from '@components/ui/atoms/logo/Logo';
import { StLeftIcon, StRightIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';
import GridItem from '@components/ui/atoms/user-card/GridItem';
import GridContainer from '@components/ui/molecules/grid/GridContainer';

import { getQuestionList } from '@api/question/getQuestionList';
import { useAsyncOnMount } from '@hooks/useAsyncOnMount';

const ListPage = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [_loading, _error, result] = useAsyncOnMount(getQuestionList);
  console.log(result);

  return (
    <>
      <StNavWrapper>
        <StNav>
          <Logo onClickHandler={() => navigate('/')} />
          <Button theme='brown20' arrow>
            답변하러 가기
          </Button>
        </StNav>
      </StNavWrapper>
      <StSortControllerWrapper>
        <StH1>누구에게 질문할까요?</StH1>
        <ArrowDropdown />
      </StSortControllerWrapper>
      <GridContainer>
        {result?.results?.map((id) => (
          <GridItem key={id} />
        ))}
      </GridContainer>
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-inline: auto;
          text-align: center;
        `}
      >
        {/* Todo svg 컴포넌트로 불러와야 함 */}
        {/* <StPaginationArrowBox>
          <StLeftIcon $size={20} $color='gray40' />
        </StPaginationArrowBox> */}
        <StIconBox>
          {/* <LeftArrow
            css={css`
              cursor: pointer;
              fill: ${({ theme }) => theme.color.Grayscale[40]};

              &:hover {
                fill: ${({ theme }) => theme.color.Brown[40]};
              }
            `}
          /> */}
          <StLeftArrow width={8} height={9} />
        </StIconBox>
        {Array.from({ length: Math.min(5, result?.results?.length) }, (_, i) => i + 1).map((v) => (
          <StPaginationNumberBox key={v}>{v}</StPaginationNumberBox>
        ))}
        <StIconBox>
          {/* <RightArrow
            css={css`
              cursor: pointer;
              fill: ${({ theme }) => theme.color.Grayscale[40]};

              &:hover {
                fill: ${({ theme }) => theme.color.Brown[40]};
              }
            `}
          /> */}
          <StRightArrow width={8} height={9} />
        </StIconBox>
        {/* <StPaginationArrowBox>
          <StRightIcon $size={20} $color='gray40' />
        </StPaginationArrowBox> */}
      </div>
    </>
  );
};

export default ListPage;

const StNavWrapper = styled.div`
  padding: 4rem 5rem;
`;

const StNav = styled.nav`
  max-width: 94rem;
  height: 5.7rem;
  margin-inline: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const StSortControllerWrapper = styled.div`
  display: flex;
  padding-inline: 2.4rem;
  justify-content: space-between;
  flex-direction: row;

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1.2rem;
  }
`;

const StH1 = styled.h1`
  margin: 0;

  color: ${({ theme }) => theme.color.Grayscale[60]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem; /* 125% */

  @media ${device.tablet} {
    font-size: 4rem;
    line-height: normal;
  }
`;

const StIconBox = styled.div`
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

// const StPaginationNumberBox = styled.span`
//   @import url('/custom-font/actor/actor.css');

//   display: flex;
//   width: 4rem;
//   height: 4rem;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;

//   & span {
//     color: ${({ theme }) => theme.color.Grayscale[40]};
//     text-align: center;
//     font-feature-settings:
//       'clig' off,
//       'liga' off;
//     font-family: 'Actor', sans-serif;
//     font-size: 2rem;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 2.5rem; /* 125% */
//     &:hover {
//       color: ${({ theme }) => theme.color.Brown[40]};
//     }
//   }
// `;
