import { useEffect, useMemo, useState } from 'react';

const usePaginate = ({ count, sort, itemsPerPage = 8, pagesPerScreen = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return count && Math.ceil(count / itemsPerPage);
  }, [count, itemsPerPage]);

  const currentPagesList = useMemo(
    () =>
      Array.from(
        { length: pagesPerScreen },
        (_, i) => i + Math.floor((currentPage - 1) / pagesPerScreen) * pagesPerScreen + 1,
      ).filter((page) => page <= totalPages),
    [pagesPerScreen, currentPage, totalPages],
  );

  /**
   *
   * @param {number | string} pagenumber
   */
  const changePage = (pagenumber) => {
    const targetPageNumber = Number(pagenumber);

    if (targetPageNumber > 0 && targetPageNumber <= totalPages) setCurrentPage(targetPageNumber);
  };

  const jumpToPreviousPageGroup = () => {
    if (Math.floor(currentPage / pagesPerScreen) === 0) return;

    setCurrentPage((prevPage) => {
      return Math.floor(prevPage / pagesPerScreen) * pagesPerScreen;
    });
  };

  const jumpToNextPageGroup = () => {
    if (Math.ceil(currentPage / pagesPerScreen) * pagesPerScreen + 1 > totalPages) return;

    setCurrentPage((prevPage) => {
      return Math.ceil(prevPage / pagesPerScreen) * pagesPerScreen + 1;
    });
  };

  const canJumpToPreviousPageGroup = Math.ceil(currentPage / pagesPerScreen) !== 1;
  const canJumpToNextPageGroup = Math.ceil(currentPage / pagesPerScreen) * pagesPerScreen + 1 <= totalPages;
  // const isNextJumpAvailable = count > Math.ceil(currentPage / pagesPerScreen) * pagesPerScreen * itemsPerPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [sort, setCurrentPage]);

  return {
    changePage,
    jumpToPreviousPageGroup,
    jumpToNextPageGroup,
    currentPage,
    currentPagesList,
    canJumpToPreviousPageGroup,
    canJumpToNextPageGroup,
  };
};

export { usePaginate };
