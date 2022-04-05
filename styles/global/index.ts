import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamilies.sans_1};
    background:${({ theme }) => theme.colors.white_200};
    padding: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.palette.text.dark};
 }
`;

export default GlobalStyles;
