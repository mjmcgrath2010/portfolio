import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import client from "@gql/client";
import NavBar from "../components/NavBar";

import theme from "../components/theme/index";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar>
          <NavBar.Logo />
          <NavBar.Routes />
        </NavBar>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
