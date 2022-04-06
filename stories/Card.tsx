/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Card from "../components/Card";
import CardProps from "../components/Card/types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
  parameters: {},
};

export const DefaultStory = () => (
  <Card>
    <Card.Image />
  </Card>
);

DefaultStory.args = {
  children: "Hello Card",
};

DefaultStory.storyName = "Card - Default Story";
