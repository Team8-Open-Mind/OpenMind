import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useCheckAuth } from './useCheckAuth';

export const useCheckAnswerPath = () => {
  const location = useLocation();
  const [path, setPath] = useState('');
  const { isUser, navigate } = useCheckAuth();

  // 현재 URL에 '/answer'가 포함되어 있는지 여부를 반환
  useEffect(() => {
    if (location.pathname.includes('/answer')) {
      // 첨에 false 두 번 나오고 true가 나와서 첫 false에서 alert가 떠버림
      setPath('answer');
    } else {
      setPath('question');
    }
  }, [location.pathname, isUser]);

  useEffect(() => {
    if (path === 'answer') {
      if (!isUser) {
        navigate('/');
        alert('접근권한이 없습니다.');
      }
    }
  });

  return { path };
};
