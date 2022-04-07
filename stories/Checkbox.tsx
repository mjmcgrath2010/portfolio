
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Checkbox from '../components/Checkbox';
import CheckboxProps from "../components/Checkbox/types";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {},
  parameters: {}
};

export const DefaultStory = ({ ...rest }: CheckboxProps) => <Checkbox {...rest} />;

DefaultStory.args = {};

DefaultStory.storyName = 'Checkbox - Default Story';