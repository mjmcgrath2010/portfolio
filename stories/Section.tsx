/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Section from "../components/Section";
import SectionProps from "../components/Section/types";

export default {
  title: "Components/Section",
  component: Section,
  argTypes: {},
  parameters: {},
};

export const DefaultStory = ({ ...rest }: SectionProps) => (
  <Section {...rest} />
);

DefaultStory.args = {
  children: "Section!",
};

DefaultStory.storyName = "Section - Default Story";
