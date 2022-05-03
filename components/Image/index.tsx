import React from "react";
import styled from "styled-components";

import ImageProps from "./types";

const Container = styled.div`
  min-width: 300px;
  overflow: hidden;
  height: auto;
  max-width: 100%;
  position: relative;
  display: block;
`;

const StyledImage = styled.img`
  min-width: 200px;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  height: auto;
`;

const Image = ({ src, className }: ImageProps) => (
  <Container className={className}>
    <StyledImage src={src} />
  </Container>
);

Image.defaultProps = {
  className: "",
  src: "https://via.placeholder.com/150",
};

export default Image;
