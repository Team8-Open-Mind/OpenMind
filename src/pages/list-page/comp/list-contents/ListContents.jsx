import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { device } from '@device/mediaBreakpoints';
import styled from 'styled-components';

import ArrowDropdown from '@components/ui/atoms/dropdown/arrow-dropdown/ArrowDropdown';

import { getQuestionLists, questionListSort } from '@api/questions/getQuestionLists';
import { useAsyncOnMount } from '@hooks/useAsyncOnMount';
import { usePaginate } from '@hooks/usePaginate';

import GridContentsArea from './comp/grid-contents-area/GridContentsArea';
import NoLists from './comp/no-lists/NoLists';
import PageTurnner from './comp/page-turner/PageTurnner';

const ListContents = () => {
  const [sort, setSort] = useState('time');
  const [result, setResult] = useState({});
  const pagesPerScreen = 5;
  const itemsPerPage = 8;
  const navigate = useNavigate();

  const {
    currentPagesList,
    currentPage,
    canJumpToNextPageGroup,
    canJumpToPreviousPageGroup,
    changePage,
    jumpToPreviousPageGroup,
    jumpToNextPageGroup,
  } = usePaginate({
    count: result?.count,
    sort,
    itemsPerPage,
    pagesPerScreen,
  });

  const [, , res] = useAsyncOnMount(
    () => getQuestionLists({ offset: (currentPage - 1) * 8, sortOrder: sort, limit: itemsPerPage }),
    [sort, currentPage],
  );

  useEffect(() => {
    setResult(res);
  }, [res]);

  const changeQuestionListSortingOrder = (e) => {
    const currentSort = questionListSort[e.target.textContent];
    setSort(currentSort);
  };

  return (
    <StContentsWrapper>
      <StSortControllerWrapper>
        <StH1>누구에게 질문할까요?</StH1>
        {Boolean(result?.count) && <ArrowDropdown callbackFn={changeQuestionListSortingOrder} />}
      </StSortControllerWrapper>
      {result?.count ? (
        <>
          <GridContentsArea result={result} changePage={changePage} currentPage={currentPage} />
          <PageTurnner
            currentPagesList={currentPagesList}
            changePage={changePage}
            currentPage={currentPage}
            jumpToPreviousPageGroup={jumpToPreviousPageGroup}
            jumpToNextPageGroup={jumpToNextPageGroup}
            canJumpToPreviousPageGroup={canJumpToPreviousPageGroup}
            canJumpToNextPageGroup={canJumpToNextPageGroup}
          />
        </>
      ) : (
        <>
          <NoLists>아직 마음을 열고있는 사람이 없습니다</NoLists>
          <StMindOpenButton onClick={() => navigate('/', { replace: true })}>내 마음 열러가기</StMindOpenButton>
        </>
      )}
    </StContentsWrapper>
  );
};

export default ListContents;

const StContentsWrapper = styled.div`
  flex-grow: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f9f9f9;
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

const StMindOpenButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.color.Brown[40]};

  color: ${({ theme }) => theme.color.Grayscale[10]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem; /* 137.5% */
`;
