import React from "react";
import styled, { css } from "styled-components";

import TypographyProps from "./types";

const Text = styled.span.attrs(({ as }: TypographyProps) => ({ as }))`
  ${({ theme, color, as }: any) => {
    const fontColor = !!["dark", "light"].includes(color)
      ? theme.palette.text[color]
      : theme.palette[color].main;
    const BaseStyles = css`
      color: ${fontColor};
    `;

    const BaseHeadingStyles = css`
      ${BaseStyles};
      font-family: ${({ theme }) => theme.fontFamilies.sans_1};
    `;

    switch (as) {
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
          ${BaseHeadingStyles};
          font-size: ${({ theme }) => theme.fontSizes.md};
        `;
      case "subtitle":
        return css`
          font-size: ${({ theme }) => theme.fontSizes.sm};
        `;
      case "body":
        return css`
          font-family: ${({ theme }) => theme.fontFamilies.sans_2};
          font-size: ${({ theme }) => theme.fontSizes.md};
        `;
      case "code":
      default:
        return css`
          font-family: ${({ theme }) => theme.fontFamilies.code};
          font-size: ${({ theme }) => theme.fontSizes.md};
        `;
    }
  }}
`;

const Typography = ({ as, color }: TypographyProps) => (
  <div>
    <Text color={color} as={as}>
      Typography Component
    </Text>
  </div>
);

Typography.defaultProps = {
  color: "dark",
  as: "p",
};

export default Typography;
