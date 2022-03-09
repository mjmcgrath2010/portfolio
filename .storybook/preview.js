import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme";

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  </BrowserRouter>
);

export const decorators = [withThemeProvider];
