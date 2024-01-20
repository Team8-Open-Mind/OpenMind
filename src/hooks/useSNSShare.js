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
      kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
    }

    kakao.Share.sendDefault({
      objectType: 'text',
      // TODO: title 정하기 ⭐
      text: 'title',
      link: {
        mobileWebUrl: urlAfterMount,
        webUrl: urlAfterMount,
      },
    });
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(urlAfterMount);
      console.log('Content copied to clipboard');
    } catch (e) {
      console.error('Failed to copy');
    }
  };

  useEffect(() => {
    setCurrentUrl(window.location.href);

    // ✅ clipboard api가 안되면 clipboard.js 라이브러리도 있다.
    // chrome용 사용 가능 확인 api
    navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
      if (result.state === 'granted' || result.state === 'prompt') {
        console.log('Write access granted!');
      }
    });

    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js';
    // Todo: 어플리케이션 kakao sdk 발급받기, integrity 채우기 ⭐
    script.integrity = '';
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
