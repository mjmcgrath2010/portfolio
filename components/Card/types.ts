import { ReactElement } from "react";

interface CardProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

export interface CardImageProps {
  src: string;
}

export default CardProps;
