import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamilies.sans_1};
    background:${({ theme }) => theme.colors.white_200};
    color: ${({ theme }) => theme.palette.text.light};
    background: url("/assets/images/default-background.jpg") center;
    background-size: cover;
 }
`;

export default GlobalStyles;
