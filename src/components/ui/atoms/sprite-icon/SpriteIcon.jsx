import styled from 'styled-components';

// size와 color를 props로 내려줄 수 있습니다.
// ex) <StHamburger size={20} color='gray40' />
const icon = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-image: url(/image/icon/sprite_icon_${(props) => props.color}.svg);
  background-size: ${(props) => props.size * 8}px ${(props) => props.size * 2}px;
  background-repeat: no-repeat;
  display: inline-block;
`;

export const StHamburger = styled(icon)`
  background-position: 0 0;
`;

export const StThumbsDownIcon = styled(icon)`
  background-position: ${(props) => `-${props.size}px 0`};
`;

export const StThumbsUpIcon = styled(icon)`
  background-position: ${(props) => `-${props.size * 2}px 0`};
`;

export const StMessageIcon = styled(icon)`
  background-position: ${(props) => `-${props.size * 3}px 0`};
`;

export const StUpIcon = styled(icon)`
  background-position: ${(props) => `-${props.size * 4}px 0`};
`;

export const StDownIcon = styled(icon)`
  background-position: ${(props) => `-${props.size * 5}px 0`};
`;

export const StLeftIcon = styled(icon)`
  background-position: ${(props) => `-${props.size * 6}px 0`};
`;

export const StRightIcon = styled(icon)`
  background-position: ${(props) => `-${props.size * 7}px 0`};
`;

export const StLinkIcon = styled(icon)`
  background-position: ${(props) => `0 -${props.size}px`};
`;

export const StKakaoIcon = styled(icon)`
  background-position: ${(props) => `-${props.size}px -${props.size}px`};
`;

export const StFacebookIcon = styled(icon)`
  background-position: ${(props) => `-${props.size * 2}px -${props.size}px`};
`;

export const StArrowIcon = styled(icon)`
  background-position: ${(props) => `-${props.size * 3}px -${props.size}px`};
`;

export const StCloseIcon = styled(icon)`
  background-position: ${(props) => `-${props.size * 4}px -${props.size}px`};
`;

export const StMemoIcon = styled(icon)`
  background-position: ${(props) => `-${props.size * 5}px -${props.size}px`};
`;

export const StUserIcon = styled(icon)`
  background-position: ${(props) => `-${props.size * 6}px -${props.size}px`};
`;
