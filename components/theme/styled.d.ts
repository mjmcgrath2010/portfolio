// styled.d.ts
import "styled-components";
interface IPalette {
  active: string;
  contrastText: {
    light: string;
    dark: string;
  };
  dark: string;
  hover: string;
  light: string;
  main: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    animations: {
      fadeIn: FlattenInterpolation;
      fadeOut: FlattenInterpolation;
      slideDown: FlattenInterpolation;
      slideIn: FlattenInterpolation;
    };
    borderRadius: string;
    fontFamilies: {
      sans_1: string;
      sans_2: string;
      code: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      black_100: string;
      black_200: string;
      black_300: string;
      black_400: string;
      black_500: string;
      black_600: string;
      black_700: string;
      black_800: string;

      blue_100: string;
      blue_200: string;
      blue_300: string;
      blue_400: string;
      blue_500: string;
      blue_600: string;
      blue_700: string;
      blue_800: string;

      beige_100: string;
      beige_200: string;
      beige_300: string;
      beige_400: string;
      beige_500: string;
      beige_600: string;
      beige_700: string;
      beige_800: string;

      green_100: string;
      green_200: string;
      green_300: string;
      green_400: string;
      green_500: string;
      green_600: string;
      green_700: string;
      green_800: string;

      gray_100: string;
      gray_200: string;
      gray_300: string;
      gray_400: string;
      gray_500: string;
      gray_600: string;
      gray_700: string;
      gray_800: string;

      indigo_100: string;
      indigo_200: string;
      indigo_300: string;
      indigo_400: string;
      indigo_500: string;
      indigo_600: string;
      indigo_700: string;
      indigo_800: string;

      orange_100: string;
      orange_200: string;
      orange_300: string;
      orange_400: string;
      orange_500: string;
      orange_600: string;
      orange_700: string;
      orange_800: string;

      red_100: string;
      red_200: string;
      red_300: string;
      red_400: string;
      red_500: string;
      red_600: string;
      red_700: string;
      red_800: string;

      violet_100: string;
      violet_200: string;
      violet_300: string;
      violet_400: string;
      violet_500: string;
      violet_600: string;
      violet_700: string;
      violet_800: string;

      white_100: string;
      white_200: string;

      yellow_100: string;
      yellow_200: string;
      yellow_300: string;
      yellow_400: string;
      yellow_500: string;
      yellow_600: string;
      yellow_700: string;
      yellow_800: string;
    };
    palette: {
      accent: IPalette;
      disabled: string;
      error: IPalette;
      info: IPalette;
      primary: IPalette;
      secondary: IPalette;
      success: IPalette;
      text: {
        light: string;
        dark: string;
        subtle: string;
      };
      warning: IPalette;
    };
    shadows: {
      light: string;
      main: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    text: {
      body: FlattenInterpolation;
      heading1: FlattenInterpolation;
      heading2: FlattenInterpolation;
      heading3: FlattenInterpolation;
      subtitle: FlattenInterpolation;
    };
    variants: {
      button: {
        primary: FlattenInterpolation;
        secondary: FlattenInterpolation;
        success: FlattenInterpolation;
        danger: FlattenInterpolation;
        info: FlattenInterpolation;
      };
    };
  }
}
