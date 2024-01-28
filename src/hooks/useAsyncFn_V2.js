import { useCallback, useState } from 'react';

import useMountedState from '@hooks/useMountedState';

const useAsyncFn_V2 = ({ asyncFn, onSuccess, onError, deps = [] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const [{ isError, error }, setErrorState] = useState({
    isError: false,
    error: new Error(),
  });
  const isMounted = useMountedState();

  const setAsyncFunction = useCallback(async (...args) => {
    try {
      if (!isLoading) setIsLoading(true);

      const res = await asyncFn(...args);

      // Todo: res가 undefined일 때도 일단은 onSuccess를 호출하도록 해야 할까? 고민.
      // if (isMounted() && onSuccess && typeof onSuccess === 'function' && res) onSuccess(res);
      if (isMounted() && onSuccess && typeof onSuccess === 'function') {
        onSuccess(res);
        setData(res);
      }

      return res;
    } catch (error) {
      if (isMounted() && onError && typeof onError === 'function') {
        onError(error);
        setErrorState({
          isError: true,
          error,
        });
      }

      return error;
    } finally {
      setIsLoading(false);
    }

    // * 매번 새로 할당되는 익명함수도 받을 수 있게 하기 위해 아래와 같이 eslint 끔. deps가 없을 때는 빈 배열을 넣어줌.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { setAsyncFunction, isLoading, data, isError, error };
};

export { useAsyncFn_V2 };
