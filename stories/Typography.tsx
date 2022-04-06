import React from "react";
import Typography from "../components/Typography";
import TypographyProps from "../components/Typography/types";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {},
  parameters: {},
};

export const DefaultStory = ({ ...rest }: TypographyProps) => (
  <Typography {...rest} />
);

DefaultStory.args = {
  children: "Typography Component",
};

DefaultStory.storyName = "Typography - Default Story";
