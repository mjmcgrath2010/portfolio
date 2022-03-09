import { css } from "styled-components";

const BaseStyles = css`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  cursor: pointer;
`;

const button = {
  primary: css`
    ${BaseStyles};
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText.light};
  `,
  secondary: css`
    ${BaseStyles};
    background: ${({ theme }) => theme.palette.secondary.main};
  `,
  success: css`
    ${BaseStyles};
    background: ${({ theme }) => theme.palette.success.main};
  `,
  danger: css`
    ${BaseStyles};
    background: ${({ theme }) => theme.palette.error.main};
  `,
  info: css`
    ${BaseStyles};
    background: ${({ theme }) => theme.palette.info.main};
  `,
};

export default button;
