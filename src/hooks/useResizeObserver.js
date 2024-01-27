import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * @default 기본값으로 document 요소를 관찰한다.
 * @returns {{observeTargetRef: React.MutableRefObject<undefined>; targetResizeInfo: null | DOMRect;}}
 */
const useResizeObserver = () => {
  const observeTargetRef = useRef();

  const [targetResizeInfo, setTargetResizeInfo] = useState(null);

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver(([entry]) => {
        if (entry && entry.target.getBoundingClientRect) {
          setTargetResizeInfo(entry.target.getBoundingClientRect());
        }
      }),
    [],
  );

  useEffect(() => {
    if (!observeTargetRef.current) observeTargetRef.current = document.documentElement;

    resizeObserver.observe(observeTargetRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [resizeObserver]);

  return { observeTargetRef, targetResizeInfo };
};

export { useResizeObserver };
