import { ReactElement } from "react";

interface SectionProps {
  children: ReactElement | ReactElement[] | string;
  className?: string;
  color?: "light" | "dark" | "accent" | "secondary";
}

export default SectionProps;
