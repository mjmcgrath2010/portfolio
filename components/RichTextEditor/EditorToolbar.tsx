import React from "react";
import styled from "styled-components";
import AppBar from "../AppBar";
import ToolbarButtons from "./ToolbarButtons";

const Container = styled(AppBar)`
  display: flex;
`;

const EditorToolBar = ({
  toggleBlock,
  toggleMark,
  isBlockActive,
  isMarkActive,
}) => (
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
