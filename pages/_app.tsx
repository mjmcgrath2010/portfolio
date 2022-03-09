import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

import NavBar from "../components/NavBar";

import theme from "../components/theme/index";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar>
        <NavBar.Logo />
        <NavBar.Routes />
      </NavBar>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
