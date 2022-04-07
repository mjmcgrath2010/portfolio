import { DefaultTheme } from "styled-components";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

export interface ImageContainerProps
  extends AspectRatio.AspectRatioProps,
    AspectRatio.PrimitiveDivProps {
  theme: DefaultTheme;
}

interface ImageProps {
  src: string;
  ratio: number;
}

export default ImageProps;
