import styled, { css } from 'styled-components';

/**
 * @typedef {'clipboard' | 'kakao' | 'facebook'} IconName
 * @param {{ iconName: IconName; onClickHandler: VoidFunction }} param0
 * @example
 * ```jsx
 *  <ShareButton iconName='kakao' onClickHandler={onClickHandler} />
 * ```
 * @description useSNSShare랑 잘 연계해서 쓸 것
 * @returns
 */
const ShareButton = ({ iconName, onClickHandler }) => {
  return (
    <StShareButton onClick={onClickHandler}>
      <IconImg $iconName={iconName} />
    </StShareButton>
  );
};

export default ShareButton;

const StShareButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;

  border-radius: 20rem;
`;

const prettyInnerImgStyle = css`
  width: 100%;
  max-width: 100%;
  height: 100%;

  object-fit: cover;
`;

const iconPath = {
  kakao: '/image/social-media-icon/kakao-icon.svg',
  facebook: '/image/social-media-icon/facebook-icon.svg',
  clipboard: '/image/social-media-icon/clipboard-icon.svg',
};

const IconImg = styled.img.attrs(({ $iconName }) => ({
  src: iconPath[$iconName],
  alt: `sns ${$iconName} 공유 아이콘`,
}))`
  ${prettyInnerImgStyle}
`;
