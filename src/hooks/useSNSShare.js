import { useEffect, useState } from 'react';

const useSNSShare = () => {
  const [urlAfterMount, setCurrentUrl] = useState();

  /**
   * @see {@link https://become-a-developer.tistory.com/63} - Parameter 'href' should represent a valid URL 에러 뜰 시.  URL을 읽어들일 수 없음 에러 뜰 시
   */
  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent(urlAfterMount);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  const shareToKakaotalk = () => {
    if (window.Kakao === undefined) {
      return;
    }

    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }

    kakao.Share.sendDefault({
      objectType: 'text',
      text: 'Openmind',
      link: {
        mobileWebUrl: urlAfterMount,
        webUrl: urlAfterMount,
      },
    });
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(urlAfterMount);
    } catch (e) {
      console.error('Failed to copy');
    }
  };

  useEffect(() => {
    setCurrentUrl(window.location.href);

    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js';
    script.integrity = import.meta.env.VITE_KAKAO_INTEGRITY_VALUE;
    script.crossOrigin = 'anonymous';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return {
    shareToFacebook,
    shareToKakaotalk,
    copyUrl,
  };
};

export { useSNSShare };
