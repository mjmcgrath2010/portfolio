import React from "react";
import styled from "styled-components";

import { useSlate } from "slate-react";

import "material-icons/iconfont/material-icons.css";

const ButtonIcon = styled.button`
  grid-column: span 1;
`;

const BUTTON_ICON_MAP = {
  bold: <span className="material-icons">pie_chart</span>,
  italic: <span className="material-icons">pie_chart</span>,
  underline: <span className="material-icons">pie_chart</span>,
  left: <span className="material-icons">pie_chart</span>,
  center: <span className="material-icons">pie_chart</span>,
  right: <span className="material-icons">pie_chart</span>,
  "bulleted-list": <span className="material-icons">pie_chart</span>,
  "numbered-list": <span className="material-icons">pie_chart</span>,
};

const textStyleButtons = ["bold", "italic", "underline"];

const alignmentButtons = ["left", "center", "right"];

const listButtons = ["bulleted-list", "numbered-list"];

const ToolbarButtons = ({
  toggleBlock,
  toggleMark,
  isBlockActive,
  isMarkActive,
}) => {
  const editor = useSlate();
  const handleToggle = (type, val) => (e) => {
    e.preventDefault();
    listButtons.forEach((button) => {
      if (isBlockActive(editor, button)) {
        toggleBlock(editor, button, null);
      }
    });
    toggleMark(editor, type, val);
  };
  const handleBlockToggle = (type, val) => (e) => {
    e.preventDefault();
    editor.removeMark("textAlign");
    toggleBlock(editor, type, val);
  };

  return (
    <>
      {textStyleButtons.map((button) => (
        <ButtonIcon
          active={isMarkActive(editor, button)}
          onMouseDown={handleToggle(button)}
          key={button}
        >
          {BUTTON_ICON_MAP[button]}
        </ButtonIcon>
      ))}

      {alignmentButtons.map((button) => (
        <ButtonIcon
          active={isMarkActive(editor, "textAlign", button)}
          onMouseDown={handleToggle("textAlign", button)}
          key={button}
        >
          {BUTTON_ICON_MAP[button]}
        </ButtonIcon>
      ))}

      {listButtons.map((button) => (
        <ButtonIcon
          active={isBlockActive(editor, button)}
          onMouseDown={handleBlockToggle(button)}
          key={button}
        >
          {BUTTON_ICON_MAP[button]}
        </ButtonIcon>
      ))}
    </>
  );
};

export default ToolbarButtons;
