import { ReactElement } from "react";

interface NavBarProps {
  children: ReactElement | ReactElement[];
  className?: string;
  desktop?: boolean | undefined;
  mobile?: boolean | undefined;
  tablet?: boolean | undefined;
}

export interface LogoProps {
  className?: string;
  role?: string;
}

export default NavBarProps;
