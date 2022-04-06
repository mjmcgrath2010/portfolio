import React from "react";
import styled, { css } from "styled-components";

import TypographyProps, { StyledTypographyProps } from "./types";

const FONT_STYLE_MAP = {
  heading1: "h1",
  heading2: "h2",
  quote: "blockquote",
  subtle: "span",
  body: "p",
  code: "code",
};

const Text = styled.span.attrs(
  ({ fontStyle = "body" }: StyledTypographyProps) => ({
    as: FONT_STYLE_MAP[fontStyle],
  })
)`
  ${({ theme, color, fontStyle, state }: StyledTypographyProps) => {
    const fontColor = state
      ? theme.palette[state].main
      : theme.palette.text[color];
    const BaseStyles = css`
      color: ${fontColor};
      padding: 0;
      margin: 0;
    `;

    const BaseHeadingStyles = css`
      ${BaseStyles};
      font-family: ${({ theme }) => theme.fontFamilies.sans_1};
    `;

    switch (fontStyle) {
      case "heading1":
        return css`
          ${BaseHeadingStyles};
          font-size: ${({ theme }) => theme.fontSizes.xl};
        `;
      case "heading2":
        return css`
          ${BaseHeadingStyles};
          font-size: ${({ theme }) => theme.fontSizes.lg};
        `;
      case "quote":
        return css`
          font-family: ${({ theme }) => theme.fontFamilies.sans_2};
          font-size: ${({ theme }) => theme.fontSizes.md};
          font-style: italic;
          border-left: ${({ theme }) => `${theme.colors.gray_300} 4px solid`};
          padding: ${({ theme }) => theme.spacing.sm};
          color: ${({ theme }) => theme.colors.gray_600};

          &::before,
          &::after {
            content: '"';
            margin: 0 2px;
          }
        `;
      case "subtle":
        return css`
          ${BaseStyles};
          font-family: ${({ theme }) => theme.fontFamilies.sans_2};
          font-size: ${({ theme }) => theme.fontSizes.sm};
        `;
      case "body":
        return css`
          ${BaseStyles};
          font-family: ${({ theme }) => theme.fontFamilies.sans_2};
          font-size: ${({ theme }) => theme.fontSizes.md};
        `;
      case "code":
        return css`
          padding: ${({ theme }) => theme.spacing.md};
          background: ${({ theme }) => theme.colors.gray_200};
          font-family: ${({ theme }) => theme.fontFamilies.code};
          font-size: ${({ theme }) => theme.fontSizes.md};
          border-radius: ${({ theme }) => theme.borderRadius};
        `;
      default:
        return css`
          ${BaseStyles};
        `;
    }
  }}
`;

const Typography = ({ children, color, fontStyle, state }: TypographyProps) => (
  <Text color={color} fontStyle={fontStyle} state={state}>
    {children}
  </Text>
);

Typography.defaultProps = {
  color: "dark",
  fontStyle: "body",
};

export default Typography;
