import { ReactElement } from "react";
interface ModalProps {
  children: any;
  buttonText: string | ReactElement;
  size: "sm" | "md" | "lg" | "fullWidth";
}

export interface HeaderProps {
  title: string | ReactElement;
}

export default ModalProps;
