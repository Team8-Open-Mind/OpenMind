import { device } from '@device/media-breakpoints';
import { css } from 'styled-components';

export const tabletSize = css`
  @media (${device.tablet}) {
    padding: 12px 24px;
    gap: 8px;
    font-size: 1.6rem;
  }
`;
