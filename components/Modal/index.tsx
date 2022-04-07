import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import ModalProps from "./types";

const Container = styled(Dialog.Root)``;

const Trigger = styled(Dialog.Trigger)`
  ${({ theme }) => theme.variants.button.primary}
`;

const ModalContent = styled(Dialog.Content)`
  width: 300px;
  position: fixed;
  top: 20%;
  left: calc(50% - 150px);
  justify-content: center;
`;

const OverlayContainer = styled(Dialog.Portal)``;

const Modal = (props: ModalProps) => (
  <Container>
    <Trigger />
    <OverlayContainer>
      <Dialog.Overlay />
      <ModalContent>
        <Dialog.Title title="Hello" />
        <Dialog.Description title="Hello" />
        <Dialog.Close />
        Hello
      </ModalContent>
    </OverlayContainer>
  </Container>
);

Modal.defaultProps = {};

export default Modal;
