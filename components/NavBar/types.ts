import { ReactElement } from "react";

interface NavBarProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

export interface LogoProps {
  className?: string;
  role?: string;
  ref: HTMLElement;
}

export default NavBarProps;
