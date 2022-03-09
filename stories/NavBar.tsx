import React from "react";
import NavBar from "../components/NavBar";

export default {
  title: "Components/NavBar",
  component: NavBar,
  argTypes: {},
  parameters: {},
};

export const DefaultStory = ({ ...rest }) => (
  <NavBar>
    <NavBar.Logo />
    <NavBar.Routes />
  </NavBar>
);

DefaultStory.args = {};

DefaultStory.storyName = "NavBar - Default Story";
