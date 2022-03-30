import React from "react";
import styled from "styled-components";
import AppBar from "../AppBar";
import ToolbarButtons from "./ToolbarButtons";
import { EditorToolBarProps } from "./types";

const Container = styled(AppBar)`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;

const EditorToolBar = ({
  toggleBlock,
  toggleMark,
  isBlockActive,
  isMarkActive,
}: EditorToolBarProps) => (
  <Container>
    <ToolbarButtons
      toggleBlock={toggleBlock}
      toggleMark={toggleMark}
      isBlockActive={isBlockActive}
      isMarkActive={isMarkActive}
    />
  </Container>
);

export default EditorToolBar;
