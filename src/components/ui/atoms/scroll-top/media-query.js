import { device } from '@device/mediaBreakpoints';
import { css } from 'styled-components';

export const tabletSize = css`
  @media ${device.tablet} {
    padding: 10px;
  }
`;
