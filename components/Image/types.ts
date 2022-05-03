import { DefaultTheme } from "styled-components";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { StaticImageData } from "next/image";

export interface ImageContainerProps
  extends AspectRatio.AspectRatioProps,
    AspectRatio.PrimitiveDivProps {
  theme: DefaultTheme;
}

interface ImageProps {
  src: string | any;
  ratio?: number;
  alt?: string;
}

export default ImageProps;
