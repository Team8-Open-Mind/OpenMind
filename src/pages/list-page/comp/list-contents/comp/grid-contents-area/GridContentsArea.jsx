import { useCallback } from 'react';

import { size } from '@device/mediaBreakpoints';
import styled from 'styled-components';

import { ReactComponent as ArrowRight } from '@assets/tablet-icon-arrow-right.svg';
import Grid from '@components/ui/molecules/grid';

import { useResizeObserver } from '@hooks/useResizeObserver';

const GridContentsArea = ({ result, changePage, currentPage }) => {
  const { targetResizeInfo } = useResizeObserver();

  const appendNextPageCard = useCallback(() => {
    if (targetResizeInfo?.width < 868 && targetResizeInfo?.width >= size.tablet) {
      if (result?.results[result.results.length - 1]?.isNextPageCard) {
        return;
      }

      if (result?.next) result?.results.push({ isNextPageCard: true, id: 'customCard' });
    } else if (result?.results[result.results.length - 1]?.isNextPageCard) {
      result?.results.pop();
    }
  }, [result?.results, result?.next, targetResizeInfo?.width]);
  appendNextPageCard();

  return (
    <Grid>
      <Grid.Container>
        {result?.results.map((questionList) => {
          if (questionList?.isNextPageCard) {
            return (
              <StNextPageCard key={questionList.id} onClick={() => changePage(currentPage + 1)}>
                <ArrowRight width='4.6rem' height='4.6rem' />
                <StNextPageCardText>다음 페이지</StNextPageCardText>
              </StNextPageCard>
            );
          }

          return <Grid.Item key={questionList.id} questionList={questionList} />;
        })}
      </Grid.Container>
    </Grid>
  );
};

export default GridContentsArea;

const StNextPageCard = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  border-radius: 1.6rem;
  background: #f5f1ee;
`;

const StNextPageCardText = styled.p`
  width: 100%;

  color: #515151;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem; /* 125% */
  letter-spacing: -0.1rem;
  text-align: left;

  margin: 0;
`;
