import { ReactElement } from "react";
export interface LinkProps {
  children: ReactElement | string;
  external?: boolean;
  href?: string;
  className?: string;
  showUnderline?: boolean;
}
