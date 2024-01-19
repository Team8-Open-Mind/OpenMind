import { css } from 'styled-components';

export const colorWhenPlaceholder = css`
  &::placeholder {
    color: ${({ theme }) => theme.color.Grayscale['40']};
  }
`;

export const colorWhenTyping = css`
  color: ${({ theme, $isTyping }) => ($isTyping ? theme.color.Grayscale['40'] : theme.color.Grayscale['60'])};
`;
