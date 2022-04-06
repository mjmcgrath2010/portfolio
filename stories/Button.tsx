/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
  parameters: {},
};

export const DefaultStory = ({ ...rest }) => <Button {...rest} />;

DefaultStory.args = {
  children: "Hello World",
};

DefaultStory.storyName = "Button - Default Story";
