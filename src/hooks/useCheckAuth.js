import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useCheckAuth = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = id;
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
