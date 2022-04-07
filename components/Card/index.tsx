import React from "react";
import Typography from "../Typography";
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
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const ImageContainer = styled.div`
  background: ${({ src }: { src: string }) =>
    `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${src}) center`};
  height: 50%;
  min-height: 150px;
  filter: grayscale(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;

  &:hover {
    background: ${({ src }: { src: string }) =>
      `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${src}) center`};
    cursor: pointer;
  }
`;

const CardImage = ({ src, title }: CardImageProps) => (
  <ImageContainer src={src}>
    <Typography fontStyle="body" color="light">
      {title}
    </Typography>
  </ImageContainer>
);

CardImage.defaultProps = {
  title: "Card Example",
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
