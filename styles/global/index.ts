import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamilies.sans_1};
    background: #282c34;
    color: #FFF;
    padding: ${({ theme }) => theme.spacing.lg}
 }
`;

export default GlobalStyles;
