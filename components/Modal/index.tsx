import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import ModalProps from "./types";
import ModalHeader from "./ModalHeader";

const Container = styled(Dialog.Root)``;

const Trigger = styled(Dialog.Trigger)`
  ${({ theme }) => theme.variants.button.primary}
`;

const SizeMap = {
  sm: "20vw",
  md: "40vw",
  lg: "60vw",
  fullWidth: "100vw",
};

const ModalContent = styled(Dialog.Content)<Partial<ModalProps>>`
  min-width: ${({ size = "md" }) => SizeMap[size]};
  min-height: 35vh;
  position: fixed;
  top: ${({ size = "md" }) =>
    size === "fullWidth" ? 0 : `calc(50% - 35vh / 2)`};
  left: calc(50% - (${({ size = "md" }) => SizeMap[size]} / 2));
  justify-content: center;
  background: ${({ theme }) => theme.palette.background.lightest};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.main};
`;

const OverlayContainer = styled(Dialog.Portal)``;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
`;

const Modal = ({
  children = "Modal Content",
  size,
  buttonText = "Click me",
}: ModalProps) => (
  <Container>
    <Trigger>{buttonText}</Trigger>
    <OverlayContainer>
      <Dialog.Overlay />
      <ModalContent size={size}>
        <Dialog.Title title="Hello" />
        <Dialog.Description title="Hello" />
        <CloseButton>X</CloseButton>
        {children}
      </ModalContent>
    </OverlayContainer>
  </Container>
);

Modal.defaultProps = {};

Modal.Header = ModalHeader;

export default Modal;
