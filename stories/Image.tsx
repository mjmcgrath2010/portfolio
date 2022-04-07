
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Image from '../components/Image';
import ImageProps from "../components/Image/types";

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {},
  parameters: {}
};

export const DefaultStory = ({ ...rest }: ImageProps) => <Image {...rest} />;

DefaultStory.args = {};

DefaultStory.storyName = 'Image - Default Story';