import React from "react";
import styled, { css } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import ModalProps from "./types";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";

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

const HeightSizeMap = {
  sm: css`
    max-height: 600px;
    min-height: 200px;
    margin: 5% auto;
  `,
  md: css`
    max-height: 600px;
    min-height: 200px;
    margin: 5% auto;
  `,
  lg: css`
    max-height: 600px;
    min-height: 200px;
    margin: 5% auto;
  `,
  fullWidth: css`
    height: 100vh;
    top: 0;
  `,
};

const ModalContent = styled(Dialog.Content)<Partial<ModalProps>>`
  min-width: ${({ size = "md" }) => SizeMap[size]};
  min-height: ${({ size = "md" }) => (size === "fullWidth" ? "100vh" : "35vh")};
  position: fixed;
  left: calc(50% - (${({ size = "md" }) => SizeMap[size]} / 2));
  justify-content: center;
  background: ${({ theme }) => theme.palette.background.lightest};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.main};
  font-family: ${({ theme }) => theme.fontFamilies.sans_1};
  ${({ size = "md" }) => HeightSizeMap[size]}
`;

const OverlayContainer = styled(Dialog.Portal)``;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.palette.text.light};
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.shadows.main};
  font-family: ${({ theme }) => theme.fontFamilies.sans_1};
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.hover};
    cursor: pointer;
  }
`;

const Modal = ({
  children = "",
  size,
  buttonText = "Click me",
  hideCloseButton = false,
}: ModalProps) => (
  <Container>
    <Trigger>{buttonText}</Trigger>
    <OverlayContainer>
      <Dialog.Overlay />
      <ModalContent size={size}>
        <Dialog.Title title="Hello" />
        <Dialog.Description title="Hello" />
        {!hideCloseButton && <CloseButton>X</CloseButton>}
        {children}
      </ModalContent>
    </OverlayContainer>
  </Container>
);

Modal.defaultProps = {};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
