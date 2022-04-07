/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  max-width: 200px;
`;

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
  parameters: {},
};

export const DefaultStory = () => (
  <Container>
    <Card>
      <Card.Image
        title="Example Featured Text"
        src="https://via.placeholder.com/150"
      />
    </Card>
  </Container>
);
DefaultStory.args = {};

DefaultStory.storyName = "Card - Default Story";
