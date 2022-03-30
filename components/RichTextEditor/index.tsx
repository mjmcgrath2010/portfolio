import React, { useState, useCallback } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

import RichTextEditorProps from "./types";

// TypeScript users only add this code
import {
  BaseEditor,
  Descendant,
  Transforms,
  Element as SlateElement,
  Editor,
} from "slate";
import { ReactEditor } from "slate-react";
import EditorToolBar from "./EditorToolbar";
import Element from "./Element";
import Leaf from "./Leaf";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const RichTextEditor = (props: RichTextEditorProps) => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState<Descendant[]>([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  // eslint-disable-next-line no-unused-vars
  const HOTKEYS = {
    "mod+b": "bold",
    "mod+i": "italic",
    "mod+u": "underline",
    "mod+`": "code",
  };

  const LIST_TYPES = ["numbered-list", "bulleted-list"];

  const isBlockActive = (slate, format) => {
    const { selection } = slate || {};
    if (!selection) return false;

    const [match] = Editor.nodes(slate, {
      at: Editor.unhangRange(slate, selection),
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    });

    return !!match;
  };

  const isMarkActive = (slate, format, val = true) => {
    const marks = Editor.marks(slate);
    return marks ? marks[format] === val : false;
  };

  // eslint-disable-next-line no-unused-vars
  const toggleBlock = (slate, format) => {
    const isActive = isBlockActive(slate, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(slate, {
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        LIST_TYPES.includes(n.type),
      split: true,
    });

    const newProperties = {
      // eslint-disable-next-line no-nested-ternary
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };

    Transforms.setNodes(slate, newProperties);

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(slate, block);
    }
  };

  const toggleMark = (slate, format, val = true) => {
    const isActive = isMarkActive(slate, format);

    if (isActive) {
      slate.removeMark(format);
    } else {
      slate.addMark(format, val);
    }
  };

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <EditorToolBar
        toggleBlock={toggleBlock}
        toggleMark={toggleMark}
        isBlockActive={isBlockActive}
        isMarkActive={isMarkActive}
      />
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
    </Slate>
  );
};

RichTextEditor.defaultProps = {};

export default RichTextEditor;
