import { ReactElement } from "react";
export interface LinkProps {
  children: ReactElement | string;
  external?: boolean;
  href?: string;
  className?: string;
  showUnderline?: boolean;
}

export interface StyledLinkProps {
  children: ReactElement | string;
  className?: string;
  showUnderline?: boolean | undefined;
}

export default LinkProps;
