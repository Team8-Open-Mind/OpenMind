import { device } from '@device/mediaBreakpoints';
import styled from 'styled-components';
/**
 * @typedef {{ width?: string; height?: string; }} LogoSize
 * @typedef {{ $tabletWidth?: string; $tabletHeight?: string }} TabletSize
 * @typedef {{ $pcWidth?: string; $pcHeight?: string; }} PcSize
 * @typedef {{ onClickHandler?: VoidFunction }} OnClickHandler
 * @param {LogoSize & TabletSize & PcSize & OnClickHandler  } LogoProps
 * @description
 * * 기본 크기는 list 페이지에 맞춰져 있습니다.
 * * 기본 width, height는 모바일 크기 기준입니다.
 * * tablet에서의 사이즈와 pc에서의 사이즈는 옵션입니다.
 */
const Logo = ({
  width = '14.6rem',
  height = '5.7rem',
  onClickHandler,
  tabletWidth,
  tabletHeight,
  pcWidth,
  pcHeight,
}) => {
  return (
    <StLogoWrapper
      onClick={onClickHandler}
      $width={width}
      $height={height}
      $tabletWidth={tabletWidth}
      $tabletHeight={tabletHeight}
      $pcWidth={pcWidth}
      $pcHeight={pcHeight}
    >
      <StLogoImg />
    </StLogoWrapper>
  );
};

export default Logo;

const StLogoWrapper = styled.div`
  cursor: pointer;

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  @media ${device.tablet} {
    width: ${({ $tabletWidth }) => $tabletWidth};
    height: ${({ $tabletHeight }) => $tabletHeight};
  }

  @media ${device.pc} {
    width: ${({ $pcWidth }) => $pcWidth};
    height: ${({ $pcHeight }) => $pcHeight};
  }
`;

const StLogoImg = styled.img.attrs({
  src: '/image/logo/logo-img.svg',
  alt: '오픈마인드 로고 이미지',
})`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;
