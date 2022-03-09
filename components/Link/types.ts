import { ReactElement } from "react";
export interface LinkProps {
  children?: ReactElement | string;
  external: boolean;
  to: string;
  className: string;
  showUnderline: boolean;
}

export interface LinkElementProps {
  to: string;
  className: string;
  showUnderline: boolean;
  children?: ReactElement | string;
}

export default LinkProps;
