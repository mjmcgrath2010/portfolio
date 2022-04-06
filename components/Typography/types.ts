import { DefaultTheme } from "styled-components";
interface TypographyProps {
  theme: DefaultTheme;
  as: "heading1" | "heading2" | "quote" | "subtle" | "body" | "code";
  color: "light" | "dark" | "error" | "success" | "info" | "warning";
}

export default TypographyProps;
