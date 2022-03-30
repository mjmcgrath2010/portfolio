import React, { ReactElement } from "react";
import styled, { css, DefaultTheme } from "styled-components";

import { useSlate } from "slate-react";

import "material-icons/iconfont/material-icons.css";
import { EditorToolBarProps } from "./types";

interface ButtonProps extends ReactElement, DefaultTheme {
  active: boolean;
  onMouseDown: Function;
}

const ButtonIcon = styled.button<ButtonProps>`
  grid-column: span 1;
  ${({ active }) =>
    active &&
    css`
      background: black;
      color: white;
    `}
`;

const BUTTON_ICON_MAP = {
  bold: <span className="material-icons">format_bold</span>,
  italic: <span className="material-icons">format_italic</span>,
  underline: <span className="material-icons">format_underlined</span>,
  code: <span className="material-icons">code</span>,
  left: <span className="material-icons">format_align_left</span>,
  center: <span className="material-icons">format_align_center</span>,
  right: <span className="material-icons">format_align_right</span>,
  "bulleted-list": <span className="material-icons">format_list_bulleted</span>,
  "numbered-list": <span className="material-icons">format_list_numbered</span>,
};

const textStyleButtons = ["bold", "italic", "underline", "code"];

const alignmentButtons = ["left", "center", "right"];

const listButtons = ["bulleted-list", "numbered-list"];

const ToolbarButtons = ({
  toggleBlock,
  toggleMark,
  isBlockActive,
  isMarkActive,
}: EditorToolBarProps) => {
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

      {alignmentButtons.map((button: string) => (
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
