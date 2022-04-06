import React from "react";
import styled from "styled-components";

import CardProps from "./types";

const Container = styled.div``;

const Card = ({ children }: CardProps) => <Container>{children}</Container>;

Card.defaultProps = {};

export default Card;
