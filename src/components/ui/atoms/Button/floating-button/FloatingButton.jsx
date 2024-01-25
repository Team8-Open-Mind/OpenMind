import { device, size } from '@device/mediaBreakpoints';
import { boxShadow2pt } from '@style/box-shadow/boxShadow';
import styled, { css } from 'styled-components';

import { useResizeObserver } from '@hooks/useResizeObserver';
import { getPercentageOrNull } from '@utils/style-utils/getPercentageOrNull';

/**
 * @typedef {{ width: number; height: number }} sizeOnMobile - 모바일 크기
 * @typedef {{ width?: number; height?: number }  | undefined} sizeOnPC - PC 크기
 *
 * @typedef {Object} TFloatingButtonProps
 * @property {{ onPc?: string; onMobile?: string } | undefined } textContentOnResize
 * - children 컴포넌트가 있으면 children 컴포넌트가 textOnMobile을 대체함.
 * @property {{ onMobile: sizeOnMobile; onPc: sizeOnPC }} boxSizeOnResize - 모바일 크기
 * @property {{ onMobile: { top?: string; right?: string; bottom?: string; left?: string }; onPc?: { top?: string; right?: string; bottom?: string; left?: string }}} positionOffsetOnResize - 위치 오프셋
 * @property {{ onMobile: string; onPc?: string }} fontSizeOnResize - 폰트 크기
 * @property { 'fixed' | 'absolute' | 'static' | 'sticky' | 'relative' } position 기본값 'fixed'
 * @property { VoidFunction } onClickHandler
 * @property { boolean } isDisabled
 * @property { boolean } hasBoxShadow
 *
 * @description
 * - 모바일 우선 개발 버튼 입니다. onMobile 프로퍼티는 전부 필수입니다.
 * - onPC가 없으면 지정한 onMobile이 기본값이 됩니다.
 * - position 기본값은 fixed 입니다. (position 프로퍼티로 변경 가능)
 * - number는 rem 단위로 적용됩니다.
 * - string은 단위까지 적어줘야 합니다.
 *
 * @param {TFloatingButtonProps} param0
 * @returns
 */
const FloatingButton = ({
  textContentOnResize,
  boxSizeOnResize,
  positionOffsetOnResize,
  fontSizeOnResize,
  position = 'fixed',
  children,
  onClickHandler,
  isDisabled = false,
  hasBoxShadow = true,
  ...rest
}) => {
  const { targetResizeInfo } = useResizeObserver();

  return (
    <StFloatingButton
      $position={position}
      $positionOffsetOnResize={positionOffsetOnResize}
      $fontSize={fontSizeOnResize}
      $boxSizeOnResize={boxSizeOnResize}
      $hasBoxShadow={hasBoxShadow}
      onClick={onClickHandler}
      disabled={isDisabled}
      {...rest}
    >
      {targetResizeInfo?.width >= size.tablet
        ? textContentOnResize?.onPc || children || textContentOnResize?.onMobile
        : children || textContentOnResize?.onMobile}
    </StFloatingButton>
  );
};

export default FloatingButton;

const positionOffsetOnResize = css`
  ${({ $positionOffsetOnResize }) => {
    return css`
      top: ${$positionOffsetOnResize?.onMobile?.top};
      right: ${$positionOffsetOnResize?.onMobile?.right};
      bottom: ${$positionOffsetOnResize?.onMobile?.bottom};
      left: ${$positionOffsetOnResize?.onMobile?.left};

      translate: ${getPercentageOrNull($positionOffsetOnResize?.onMobile?.right) ||
        ($positionOffsetOnResize?.onMobile?.left &&
          getPercentageOrNull($positionOffsetOnResize?.onMobile?.left) &&
          `-${getPercentageOrNull($positionOffsetOnResize?.onMobile?.left)}`) ||
        0}
        ${($positionOffsetOnResize?.onMobile?.top &&
          getPercentageOrNull($positionOffsetOnResize?.onMobile?.top) &&
          `-${getPercentageOrNull($positionOffsetOnResize?.onMobile?.top)}`) ||
        getPercentageOrNull($positionOffsetOnResize?.onMobile?.bottom) ||
        0};

      /* 피그마 컴포넌트 시안에서는 pc라고 되어있는데 페이지 시안은 tablet부터임 */
      @media ${device.tablet} {
        top: ${$positionOffsetOnResize?.onPc?.top};
        right: ${$positionOffsetOnResize?.onPc?.right};
        bottom: ${$positionOffsetOnResize?.onPc?.bottom};
        left: ${$positionOffsetOnResize?.onPc?.left};
      }
    `;
  }}
`;

/**
 * 단위 자율화(string type)
 */
const fontSizeOnResize = css`
  font-size: ${({ $fontSize }) => $fontSize?.onMobile};

  @media ${device.tablet} {
    font-size: ${({ $fontSize }) => $fontSize?.onPc};
  }
`;

/**
 * @description 단위 rem 고정.(number type)
 */
const boxSizeOnResize = css`
  ${({ $boxSizeOnResize }) => {
    return css`
      width: ${$boxSizeOnResize?.onMobile?.width && `${$boxSizeOnResize?.onMobile?.width}rem`};
      height: ${$boxSizeOnResize?.onMobile?.height && `${$boxSizeOnResize?.onMobile?.height}rem`};

      @media ${device.tablet} {
        width: ${$boxSizeOnResize?.onPc?.width && `${$boxSizeOnResize?.onPc?.width}rem`};
        height: ${$boxSizeOnResize?.onPc?.height && `${$boxSizeOnResize?.onPc?.height}rem`};
      }
    `;
  }}
`;

const StFloatingButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  padding: 0;
  ${boxSizeOnResize}

  position: ${({ $position }) => $position};
  ${positionOffsetOnResize}

  border-radius: 20rem;
  background: ${({ theme }) => theme.color.Brown[40]};

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-weight: 400;
  line-height: 2.5rem; /* 125% */
  color: ${({ theme }) => theme.color.Grayscale[10]};
  ${fontSizeOnResize}

  ${({ $hasBoxShadow }) => $hasBoxShadow && boxShadow2pt}
`;
