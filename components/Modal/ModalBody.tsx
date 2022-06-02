import React from "react";
import { ModalBodyProps } from "./types";
import styled from "styled-components";

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

const ModalBody = ({ children = "Modal Body" }: ModalBodyProps) => {
  return <Container>{children}</Container>;
};

export default ModalBody;
