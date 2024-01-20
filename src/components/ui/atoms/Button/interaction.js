import { css } from 'styled-components';

export const brown20Interaction = css`
  &:hover:not(:disabled) {
    outline: 2px solid ${({ theme }) => theme.color.Brown['40']};
  }

  &:active {
    outline: 2px solid ${({ theme }) => theme.color.Brown['40']};
    background: ${({ theme }) => theme.color.Brown['20']};
    color: ${({ theme }) => theme.color.Brown['40']};
  }

  &:disabled {
    background: ${({ theme }) => theme.color.Brown['10']};
    color: ${({ theme }) => theme.color.Brown['30']};
    outline: 1px solid ${({ theme }) => theme.color.Brown['30']};
    cursor: default;
  }
`;

export const brown40Interaction = css`
  &:hover:not(:disabled) {
    outline: 1px solid ${({ theme }) => theme.color.Brown['50']};
  }

  &:active {
    background: ${({ theme }) => theme.color.Brown['50']};
    color: ${({ theme }) => theme.color.Grayscale['10']};
  }

  &:disabled {
    background: ${({ theme }) => theme.color.Brown['30']};
    cursor: default;
  }
`;
