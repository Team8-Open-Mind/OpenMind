import { useEffect } from 'react';

import { useAsyncFn_V2 } from './useAsyncFn_V2';

const useAsync_V2 = ({ asyncFn, onSuccess, onError, onSettled, enabled = true, deps = [] }) => {
  const { isLoading, setAsyncFunction, data, error, isError } = useAsyncFn_V2({
    asyncFn,
    onSuccess,
    onError,
    onSettled,
    deps,
    enabled,
  });

  useEffect(() => {
    if (!enabled) return;

    setAsyncFunction();
  }, [setAsyncFunction, enabled]);

  return { isLoading, setAsyncFunction, data, error, isError };
};

export { useAsync_V2 };
