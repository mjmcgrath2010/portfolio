import { ReactEditor } from "slate-react";
import { BaseEditor } from "slate";

export type CustomElement = { type: string; children: CustomText[] };
export type CustomText = { text: string };
export interface LeafProps {
  attributes: object;
  children: CustomText[];
  leaf: object;
}

export interface ElementProps {
  element: CustomElement;
  attributes: object;
  children: CustomText[];
}

export interface EditorToolBarProps {
  toggleBlock: Function;
  toggleMark: Function;
  isBlockActive: Function;
  isMarkActive: Function;
}

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

interface RichTextEditorProps {
  onChange: Function;
  initialValue: any;
}

export default RichTextEditorProps;
