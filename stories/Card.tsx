
import React from 'react';
import Card from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
  parameters: {}
};

export const DefaultStory = ({ ...rest }) => <Card {...rest} />;

DefaultStory.args = {};

DefaultStory.storyName = 'Card - Default Story';