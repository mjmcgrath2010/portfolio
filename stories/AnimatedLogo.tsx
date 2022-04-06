/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import AnimatedLogo from "../components/AnimatedLogo";

export default {
  title: "Components/AnimatedLogo",
  component: AnimatedLogo,
  argTypes: {},
  parameters: {},
};

export const DefaultStory = ({ ...rest }) => <AnimatedLogo {...rest} />;

DefaultStory.args = {};

DefaultStory.storyName = "AnimatedLogo - Default Story";
