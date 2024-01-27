import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useCheckAnswerPath = () => {
  const location = useLocation();
  const [path, setPath] = useState('');

  // 현재 URL에 '/answer'가 포함되어 있는지 여부를 반환
  useEffect(() => {
    if (location.pathname.includes('/answer')) {
      setPath('answer');
    } else {
      setPath('question');
    }
  }, [location.pathname, path]);

  return { path };
};
