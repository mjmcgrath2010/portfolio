import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";

import client from "@gql/client";

import theme from "../components/theme/index";
import GlobalStyles from "../styles/global";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
