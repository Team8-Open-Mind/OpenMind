import styled from 'styled-components';

export const SPRITE_ICON_BLACK = '/image/icon/sprite_icon_black.svg';

const icon = styled.div`
  background-image: url('${SPRITE_ICON_BLACK}');
  width: 24px;
  height: 24px;
  display: inline-block;
`;

export const StThumbsUpIcon = styled(icon)`
  background-position: -48px 0;
`;

export const StMessageIcon = styled(icon)`
  background-position: -72px 0;
`;

export const StUpIcon = styled(icon)`
  background-position: -96px 0;
`;

export const StDownIcon = styled(icon)`
  background-position: -120px 0;
`;

export const StLeftIcon = styled(icon)`
  background-position: -144px 0;
`;

export const StRightIcon = styled(icon)`
  background-position: -168px 0;
`;

export const StLinkIcon = styled(icon)`
  background-position: 0 -24px;
`;

export const StKakaoIcon = styled(icon)`
  background-position: -24px -24px;
`;

export const StFacebookIcon = styled(icon)`
  background-position: -48px -24px;
`;

export const StArrowIcon = styled(icon)`
  background-position: -72px -24px;
`;

export const StCloseIcon = styled(icon)`
  background-position: -96px -24px;
`;

export const StMemoIcon = styled(icon)`
  background-position: -120px -24px;
`;

export const StUserIcon = styled(icon)`
  background-position: -144px -24px;
`;
