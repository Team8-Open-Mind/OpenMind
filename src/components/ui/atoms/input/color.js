import { css } from 'styled-components';

export const colorOnPlaceholder = css`
  &::placeholder {
    color: ${({ theme }) => theme.color.Grayscale['40']};
  }
`;

export const colorOnTyping = css`
  color: ${({ theme, $isTyping }) => ($isTyping ? theme.color.Grayscale['40'] : theme.color.Grayscale['60'])};
`;
