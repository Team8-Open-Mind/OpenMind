import { useCallback, useEffect } from 'react';

import { size } from '@device/mediaBreakpoints';

import { useResizeObserver } from '@hooks/useResizeObserver';

// 768 ~ 867
const useAppendNextPageCard = ({ results, next, setResult }) => {
  const { targetResizeInfo } = useResizeObserver();

  const appendNextPageCard = useCallback(() => {
    if (targetResizeInfo?.width < 868 && targetResizeInfo?.width >= size.tablet) {
      if (results[results.length - 1]?.isNextPageCard) {
        return;
      }

      if (next) {
        setResult((prev) => ({ ...prev, results: [...prev?.results, { isNextPageCard: true, id: 'customCard' }] }));
      }
    } else if (results[results.length - 1]?.isNextPageCard) {
      setResult((prev) => ({ ...prev, results: prev?.results.slice(0, prev?.results.length - 1) }));
    }
  }, [results, next, setResult, targetResizeInfo?.width]);

  useEffect(() => {
    appendNextPageCard();
  }, [appendNextPageCard]);
};

export { useAppendNextPageCard };
