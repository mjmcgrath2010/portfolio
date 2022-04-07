
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Modal from '../components/Modal';
import ModalProps from "../components/Modal/types";

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
  parameters: {}
};

export const DefaultStory = ({ ...rest }: ModalProps) => <Modal {...rest} />;

DefaultStory.args = {};

DefaultStory.storyName = 'Modal - Default Story';