import React from "react";
import Card from "../components/Card";
import CardProps from "../components/Card/types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
  parameters: {},
};

export const DefaultStory = ({ ...rest }: CardProps) => <Card {...rest} />;

DefaultStory.args = {
  children: "Hello Card",
};

DefaultStory.storyName = "Card - Default Story";
