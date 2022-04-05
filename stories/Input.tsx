import React from "react";
import Input from "../components/Input";
import InputProps from "../components/Input/types";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {},
  parameters: {},
};

export const DefaultStory = ({ ...rest }: InputProps) => <Input {...rest} />;

DefaultStory.args = {};

DefaultStory.storyName = "Input - Default Story";
