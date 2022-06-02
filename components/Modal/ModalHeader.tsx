import React from "react";

import Typography from "../Typography";
import { HeaderProps } from "./types";

const ModalHeader = ({ title = "Modal Header" }: HeaderProps) => {
  return <Typography>{title}</Typography>;
};

export default ModalHeader;
