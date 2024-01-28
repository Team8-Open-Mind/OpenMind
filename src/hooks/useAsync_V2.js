import { useEffect } from 'react';

import { useAsyncFn_V2 } from './useAsyncFn_V2';

const useAsync_V2 = ({ asyncFn, onSuccess, onError, deps = [] }) => {
  const { isLoading, setAsyncFunction, data, error, isError } = useAsyncFn_V2({ asyncFn, onSuccess, onError, deps });

  useEffect(() => {
    setAsyncFunction();
  }, [setAsyncFunction]);

  return { isLoading, setAsyncFunction, data, error, isError };
};

export { useAsync_V2 };
