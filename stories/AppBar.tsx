import React from "react";
import AppBar from "../components/AppBar";

export default {
  title: "Components/AppBar",
  component: AppBar,
  argTypes: {},
  parameters: {},
};

export const DefaultStory = ({ ...rest }) => <AppBar>Hello</AppBar>;

DefaultStory.args = {
  children: "Hello World",
};

DefaultStory.storyName = "AppBar - Default Story";
