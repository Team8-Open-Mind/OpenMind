import { useEffect, useState } from 'react';

const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const visiblePosition = 300;

    // 스크롤이 visiblePosition을 넘어가면 위로가기 버튼을 보여줌
    if (scrollTop > visiblePosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [isVisible, handleScrollToTop];
};

export default useScrollToTop;
