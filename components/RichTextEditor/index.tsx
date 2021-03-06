import React, { useState, useCallback } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { Descendant, Transforms, Element as SlateElement, Editor } from "slate";
import styled from "styled-components";

import RichTextEditorProps, { ElementProps, LeafProps } from "./types";
import EditorToolBar from "./EditorToolbar";
import Element from "./Element";
import Leaf from "./Leaf";

const Content = styled.div`
  position: relative;
  padding: 90px 24px 24px;
  height: 100%;
  min-height: 500px;
`;

const RichTextEditor = ({ onChange, initialValue }: RichTextEditorProps) => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState<Descendant[]>(
    initialValue || [
      {
        type: "paragraph",
        children: [
          {
            text: "",
          },
        ],
      },
    ]
  );

  const renderElement = useCallback(
    (props: ElementProps) => <Element {...props} />,
    []
  );
  const renderLeaf = useCallback((props: LeafProps) => <Leaf {...props} />, []);

  // eslint-disable-next-line no-unused-vars
  const HOTKEYS = {
    "mod+b": "bold",
    "mod+i": "italic",
    "mod+u": "underline",
    "mod+`": "code",
  };

  const LIST_TYPES = ["numbered-list", "bulleted-list"];

  const isBlockActive = (slate: Editor, format: string) => {
    const { selection } = slate || {};
    if (!selection) return false;

    const [match] = Editor.nodes(slate, {
      at: Editor.unhangRange(slate, selection),
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    });

    return !!match;
  };

  const isMarkActive = (slate: Editor, format: string, val = true) => {
    const marks: any = Editor.marks(slate);
    return marks ? marks[format] === val : false;
  };

  // eslint-disable-next-line no-unused-vars
  const toggleBlock = (slate: Editor, format: string) => {
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

  const toggleMark = (slate: Editor, format: string, val = true) => {
    const isActive = isMarkActive(slate, format);

    if (isActive) {
      slate.removeMark(format);
    } else {
      slate.addMark(format, val);
    }
  };

  const handleChange = (update: Descendant[]) => {
    setValue(update);
    onChange(update);
  };

  return (
    <Slate editor={editor} value={value} onChange={handleChange}>
      <EditorToolBar
        toggleBlock={toggleBlock}
        toggleMark={toggleMark}
        isBlockActive={isBlockActive}
        isMarkActive={isMarkActive}
      />
      <Content>
        <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
      </Content>
    </Slate>
  );
};

RichTextEditor.defaultProps = {
  onChange: () => {},
};

export default RichTextEditor;
