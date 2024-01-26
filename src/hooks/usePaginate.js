import { useEffect, useMemo, useState } from 'react';

const usePaginate = ({ count, sort, itemsPerPage = 8, pagesPerGroup = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return count && Math.ceil(count / itemsPerPage);
  }, [count, itemsPerPage]);

  const currentPageGroup = useMemo(
    () =>
      Array.from(
        { length: pagesPerGroup },
        (_, i) => i + Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1,
        // (_, i) => i + (Math.ceil(currentPage / pagesPerGroup) - 1) * pagesPerGroup + 1,
      ).filter((page) => page <= totalPages),
    [pagesPerGroup, currentPage, totalPages],
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
    if (Math.ceil(currentPage / pagesPerGroup) === 1) return;

    setCurrentPage((prevPage) => {
      return (Math.ceil(prevPage / pagesPerGroup) - 1) * pagesPerGroup;
    });
  };

  const jumpToNextPageGroup = () => {
    if (Math.ceil(currentPage / pagesPerGroup) * pagesPerGroup + 1 > totalPages) return;

    setCurrentPage((prevPage) => {
      return Math.ceil(prevPage / pagesPerGroup) * pagesPerGroup + 1;
    });
  };

  const canJumpToPreviousPageGroup = Math.ceil(currentPage / pagesPerGroup) !== 1;
  const canJumpToNextPageGroup = Math.ceil(currentPage / pagesPerGroup) * pagesPerGroup + 1 <= totalPages;
  // const canJumpToNextPageGroup = count > Math.ceil(currentPage / pagesPerGroup) * pagesPerGroup * itemsPerPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [sort, setCurrentPage]);

  return {
    changePage,
    jumpToPreviousPageGroup,
    jumpToNextPageGroup,
    currentPage,
    currentPageGroup,
    canJumpToPreviousPageGroup,
    canJumpToNextPageGroup,
  };
};

export { usePaginate };
