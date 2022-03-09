import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

import NavBar from "../components/NavBar";

import theme from "../components/theme/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        <NavBar.Logo />
        <NavBar.Routes />
      </NavBar>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
