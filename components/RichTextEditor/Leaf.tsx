import React from "react";
import styled from "styled-components";
import { LeafProps } from "./types";

const LeafContainer = styled.span.attrs(({ code, theme }) => ({
  fontFamily: code ? theme.fontFamilies.code : undefined,
}))`
  font-weight: ${({ bold }) => (bold ? "bold" : "regular")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "inherit")};
  text-decoration: ${({ underline }) => (underline && "underline") || "none"};
  font-style: ${({ italic }) => (italic && "italic") || "normal"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-family: ${({ fontFamily }) => fontFamily || "Lato"};
  color: ${({ textColor }) => textColor || "#000"};
  position: relative;
  display: block;
  background: ${({ code, theme }) => (code ? theme.colors.gray_200 : "none")};
  width: fit-content;
  padding: ${({ code }) => (code ? "8px" : "inherit")};
  margin: ${({ code }) => (code ? "0 auto" : "inherit")};
  min-width: ${({ code }) => (code ? "60%" : "inherit")};
`;

const Leaf = ({ attributes, children, leaf }: LeafProps) => (
  <LeafContainer {...attributes} {...leaf}>
    {children}
  </LeafContainer>
);

export default Leaf;
