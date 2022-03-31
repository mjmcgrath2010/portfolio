
import React from 'react';
import Input from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
  parameters: {}
};

export const DefaultStory = ({ ...rest }) => <Input {...rest} />;

DefaultStory.args = {};

DefaultStory.storyName = 'Input - Default Story';