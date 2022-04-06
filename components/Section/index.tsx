import React from "react";
import styled from "styled-components";
import SectionProps from "./types";

const Container = styled.div<SectionProps>`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme, color }) => theme.palette.background[color]};
  min-height: 300px;
  margin: 0;
  width: 100%;
  overflow-x: hidden;
`;

const Section = ({ children, color }: SectionProps) => (
  <Container color={color}>{children}</Container>
);

Section.defaultProps = {
  color: "light",
};

export default Section;
