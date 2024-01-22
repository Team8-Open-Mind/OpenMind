import { useEffect } from 'react';

import { useAsync } from './useAsync';

// 로딩과 에러 메시지를 적을 상태 저장
// getAsyncFunction에 원하는 api 호출 함수가 들어가야한다.
// 특정 이벤트 발생 없을때도 바로 받아 올 수 있다.

export const useAsyncOnMount = (getAsyncFunction) => {
  const [loading, error, result, setAsyncFunction] = useAsync(getAsyncFunction);

  useEffect(() => {
    // 렌더링되자마자 호출되도록
    setAsyncFunction();
  }, [setAsyncFunction]);

  return [loading, error, result];
};
