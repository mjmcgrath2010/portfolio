import { ReactElement } from "react";

interface SectionProps {
  children: ReactElement | ReactElement[];
  className?: string;
  color?: "light" | "dark" | "accent";
}

export default SectionProps;
