import { useNavigate } from 'react-router-dom';

import { device } from '@device/mediaBreakpoints';
import styled, { css } from 'styled-components';

import { ReactComponent as LeftArrow } from '@assets/left-arrow.svg';
import { ReactComponent as RightArrow } from '@assets/right-arrow.svg';
import Button from '@components/ui/atoms/Button/Button';
import ArrowDropdown from '@components/ui/atoms/dropdown/arrow-dropdown/ArrowDropdown';
import Logo from '@components/ui/atoms/logo/Logo';
import Grid from '@components/ui/molecules/grid';

import { getQuestionLists } from '@api/questions/getQuestionLists';
import { useAsyncOnMount } from '@hooks/useAsyncOnMount';

const ListPage = () => {
  const navigate = useNavigate();

  const [, , result] = useAsyncOnMount(getQuestionLists);
  console.log(result);

  return (
    <StWrap>
      <StNavWrapper>
        <StNav>
          <Logo onClickHandler={() => navigate('/')} />
          <Button theme='brown20' arrow>
            답변하러 가기
          </Button>
        </StNav>
      </StNavWrapper>
      <StContentsWrapper>
        <StSortControllerWrapper>
          <StH1>누구에게 질문할까요?</StH1>
          <ArrowDropdown />
        </StSortControllerWrapper>
        <Grid.Container>
          {result?.results.map((questionList) => {
            return <Grid.Item key={questionList.id} />;
          })}
        </Grid.Container>
        <StPageTurnner
          css={css`
            display: flex;
            align-items: center;
            margin-inline: auto;
            text-align: center;
            width: fit-content;
            margin-inline: auto;
          `}
        >
          <StIconAlignBox>
            <StLeftArrow width={8} height={9} />
          </StIconAlignBox>
          {Array.from({ length: Math.min(5, Math.ceil(result?.results.length / 8)) }, (_, i) => i + 1).map((v) => {
            console.log(v);

            return <StPaginationNumberBox key={v}>{v}</StPaginationNumberBox>;
          })}
          <StIconAlignBox>
            <StRightArrow width={8} height={9} />
          </StIconAlignBox>
        </StPageTurnner>
      </StContentsWrapper>
    </StWrap>
  );
};

export default ListPage;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StNavWrapper = styled.div`
  padding: 4rem 5rem;
`;

const StNav = styled.nav`
  max-width: 94rem;
  /* height: 5.7rem; */
  height: auto;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 2rem;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 0;
  }
`;

const StSortControllerWrapper = styled.div`
  width: 100%;

  display: flex;
  padding-inline: 2.4rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1.2rem;
  }
`;

const StContentsWrapper = styled.div`
  /* justify-items: stretch; */
  flex-grow: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
