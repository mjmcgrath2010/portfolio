import { ReactElement } from "react";

interface SectionProps {
  children: ReactElement | ReactElement[];
  color?: "light" | "dark" | "accent";
}

export default SectionProps;
