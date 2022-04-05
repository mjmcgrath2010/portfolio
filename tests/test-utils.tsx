// test-utils.js
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider, Session } from "next-auth/react";

import theme from "@components/theme";
import client from "@gql/client";

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }: any) => {
  const session: Session = {
    data: null,
    status: "unauthenticated",
    expires: "",
  };
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
