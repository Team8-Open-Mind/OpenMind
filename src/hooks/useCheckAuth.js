import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useCheckAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userIdMatch = location.pathname.match(/\/post\/(\d+)\/answer/);
  const userId = userIdMatch ? userIdMatch[1] : null;
  const storedUserId = localStorage.getItem('userId');
  const [isUser, setIsUser] = useState(false);

  // userId와 storedUerId 값이 둘 다 존재하는데 두 값이 서로 다를 경우
  useEffect(() => {
    if (userId !== storedUserId) {
      setIsUser(false);
    } else {
      setIsUser(true);
    }
  }, [storedUserId, userId]);

  return { isUser, navigate };
};
