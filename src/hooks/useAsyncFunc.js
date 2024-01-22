import { useCallback, useState } from 'react';

// 로딩과 에러 메시지를 적을 상태 저장
// getAsyncFunction에 원하는 api 호출 함수가 들어가야한다.
// 특정 이벤트 발생했을 때 사용할 수 있는 커스텀 훅이다.

export const useAsync = (getAsyncFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setAsyncFunction = useCallback(
    async (...args) => {
      try {
        setError(null);
        setLoading(true);

        return await getAsyncFunction(...args);
      } catch (error) {
        setError(error);

        return;
      } finally {
        setLoading(false);
      }
    },
    [getAsyncFunction],
  );

  return [loading, error, setAsyncFunction];
};
