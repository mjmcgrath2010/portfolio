import { DefaultTheme } from "styled-components";
import { ReactElement } from "react";
interface TypographyProps {
  fontStyle?: "heading1" | "heading2" | "quote" | "subtle" | "body" | "code";
  color?: "light" | "dark";
  children: string | ReactElement | ReactElement[];
  state?: "error" | "success" | "info" | "warning";
}

export interface StyledTypographyProps {
  as: "h1" | "h2" | "blockquote" | "span" | "p" | "code";
  theme: DefaultTheme;
  fontStyle: "heading1" | "heading2" | "quote" | "subtle" | "body" | "code";
  color: "light" | "dark";
  children: string | ReactElement | ReactElement[];
  state?: "error" | "success" | "info" | "warning";
}

export default TypographyProps;
