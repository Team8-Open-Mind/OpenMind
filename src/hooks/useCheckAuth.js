import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useCheckAuth = () => {
  const { userId } = useParams(); // React Router의 useParams를 이용해 URL에서 userId를 추출
  const [isUser, setIsUser] = useState(false);
  const storedUserId = localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(() => {
    // userId와 storedUerId 값이 둘 다 존재하는데 두 값이 서로 다를 경우
    if (userId && storedUserId && userId !== storedUserId) {
      setIsUser(false);
    } else {
      setIsUser(true);
    }
  }, [userId, storedUserId]);

  return { isUser, navigate };
};
