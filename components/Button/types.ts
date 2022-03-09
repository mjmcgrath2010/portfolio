import { MouseEventHandler, ReactElement } from "react";

interface ButtonProps {
  children: ReactElement | string;
  color: "primary" | "secondary" | "danger" | "info" | "success";
  variant: "outlined" | "contained";
  onClick?: MouseEventHandler;
}

export default ButtonProps;
