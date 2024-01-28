// mobile first develop: default mobile
export const size = {
  tablet: 768,
  pc: 1025,
};

/**
 * - PC: 1025px 이상
 * - Tablet: 768px 이상 ~ 1199px 이하
 * - Mobile: 375px 이상 ~ 767px 이하
 * * `375px 미만 사이즈의 디자인은 고려하지 않습니다`
 * */
export const device = {
  tablet: `screen and (min-width: ${size.tablet}px)`,
  pc: `screen and (min-width: ${size.pc}px)`,
};
