import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import client from "@gql/client";
import NavBar from "../components/NavBar";

import theme from "../components/theme/index";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}

export default MyApp;
