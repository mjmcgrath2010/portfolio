
import React from 'react';
import RichTextEditor from '../components/RichTextEditor';

export default {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
  argTypes: {},
  parameters: {}
};

export const DefaultStory = ({ ...rest }) => <RichTextEditor {...rest} />;

DefaultStory.args = {};

DefaultStory.storyName = 'RichTextEditor - Default Story';