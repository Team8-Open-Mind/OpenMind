import { useCallback, useRef, useState } from 'react';

import { useMountedState } from '@hooks/useMountedState';

const useAsyncFn_V2 = ({ asyncFn, onSuccess, onError, onSettled, deps = [] }) => {
  const [{ data, error, isError, isLoading }, setState] = useState({
    isLoading: false,
    data: null,
    isError: false,
    error: new Error(),
  });

  // onSettled로 넘길 ref(항상 최신값을 참조하기 위함)
  const dataRef = useRef();
  const errorRef = useRef();

  // 맨 마지막 요청만 처리
  const queueRef = useRef(0);
  const isMounted = useMountedState();

  const setAsyncFunction = useCallback(async (...args) => {
    const lastIndexOfQueue = ++queueRef.current;

    return (async () => {
      try {
        if (!isLoading) setState((prev) => ({ ...prev, isLoading: true }));

        const res = await asyncFn(...args);

        // Todo: res가 undefined일 때도 일단은 onSuccess를 호출하도록 해야 할까? 고민.
        if (isMounted() && queueRef.current === lastIndexOfQueue) {
          if (onSuccess && typeof onSuccess === 'function') {
            onSuccess(res, ...args);
          }

          dataRef.current = res;
          setState({ data: res, isLoading: false, isError: false });
        }

        return res;
      } catch (error) {
        if (isMounted() && queueRef.current === lastIndexOfQueue) {
          if (onError && typeof onError === 'function') {
            onError(error, ...args, data);
          }

          errorRef.current = error;
          setState({ error, isLoading: false, isError: true });
        }

        return error;
      } finally {
        if (isMounted() && queueRef.current === lastIndexOfQueue && onSettled && typeof onSettled === 'function') {
          onSettled(dataRef.current, errorRef.current, ...args);
        }
      }
    })();

    // * 매번 새로 할당되는 익명함수도 받을 수 있게 하기 위해 아래와 같이 eslint 끔. deps가 없을 때는 빈 배열을 넣어줌.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { setAsyncFunction, isLoading, data, isError, error };
};

export { useAsyncFn_V2 };
