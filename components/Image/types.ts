import { DefaultTheme } from "styled-components";

export interface ImageContainerProps {
  theme: DefaultTheme;
}

interface ImageProps {
  src: string | any;
  alt?: string;
}

export default ImageProps;
