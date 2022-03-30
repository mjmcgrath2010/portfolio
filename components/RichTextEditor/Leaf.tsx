import React from "react";
import styled from "styled-components";

const LeafContainer = styled.span`
  font-weight: ${({ bold }) => (bold ? "bold" : "regular")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "inherit")};
  text-decoration: ${({ underline }) => (underline && "underline") || "none"};
  font-style: ${({ italic }) => (italic && "italic") || "normal"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-family: ${({ fontFamily }) => fontFamily || "Lato"};
  color: ${({ textColor }) => textColor || "#000"};
  position: relative;
  display: block;
`;

const Leaf = ({ attributes, children, leaf }) => (
  <LeafContainer {...attributes} {...leaf}>
    {children}
  </LeafContainer>
);

Leaf.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  leaf: PropTypes.object.isRequired,
};

export default Leaf;
