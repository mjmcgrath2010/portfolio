import { ReactElement } from "react";

interface NavBarProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

export interface LogoProps {
  className?: string;
  role?: string;
}

export default NavBarProps;
