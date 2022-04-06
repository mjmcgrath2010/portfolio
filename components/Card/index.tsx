import React from "react";
import styled from "styled-components";

import CardProps from "./types";

const Container = styled.div``;

const Card = (props: CardProps) => (
  <Container>
    <h1>Card Component</h1>
  </Container>
);

Card.defaultProps = {};

export default Card;
