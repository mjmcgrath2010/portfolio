import React from "react";
import styled from "styled-components";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

import ImageProps, { ImageContainerProps } from "./types";

const Container = styled(AspectRatio.Root)<ImageContainerProps>`
  width: fit-content;
  height: fit-content;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.main};
`;

const StyledImage = styled.img`
  height: auto;
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  margin: 0 auto;
  display: block;
`;

const Image = ({ src, ratio }: ImageProps) => (
  <Container ratio={ratio}>
    <StyledImage src={src} />
  </Container>
);

Image.defaultProps = {
  src: "https://via.placeholder.com/150",
  ratio: 1,
};

export default Image;
