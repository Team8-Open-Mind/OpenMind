import { useEffect } from 'react';

const useNavigateToAnswer = (result, navigate) => {
  useEffect(() => {
    if (result) {
      localStorage.setItem('userId', result?.id);
      navigate(`/post/${result?.id}/answer`);
    }
  }, [result, navigate]);
};

export { useNavigateToAnswer };
