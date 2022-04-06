import React from "react";
import styled from "styled-components";

import CardProps, { CardImageProps } from "./types";

const Container = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.main};
  height: 100%;
  max-width: 90%;
  min-height: 120px;
  padding: ${({ theme }) => theme.spacing.md};
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
`;

const StyledCardImage = styled.div<CardImageProps>`
  width: 100%;
  height: 200px;
  background: url(${({ src }) => src}) center;
  background-size: cover;
`;

const CardImage = ({ src }: CardImageProps) => <StyledCardImage src={src} />;

CardImage.defaultProps = {
  src: "https://via.placeholder.com/150",
};

const Card = ({ children, className }: CardProps) => (
  <Container className={className}>{children}</Container>
);

Card.Image = CardImage;

Card.defaultProps = {
  className: "",
};

export default Card;
