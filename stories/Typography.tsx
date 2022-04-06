
import React from 'react';
import Typography from '../components/Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {},
  parameters: {}
};

export const DefaultStory = ({ ...rest }) => <Typography {...rest} />;

DefaultStory.args = {};

DefaultStory.storyName = 'Typography - Default Story';