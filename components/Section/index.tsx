import React from "react";
import styled from "styled-components";
import SectionProps from "./types";

const Container = styled.div<SectionProps>`
  background: ${({ theme, color = "light" }) =>
    theme.palette.background[color]};
  min-height: 300px;
  overflow: hidden;
  display: block;
  position: relative;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Section = ({ children, className, color }: SectionProps) => (
  <Container className={className} color={color}>
    {children}
  </Container>
);

Section.defaultProps = {
  color: "light",
  className: "",
};

export default Section;
