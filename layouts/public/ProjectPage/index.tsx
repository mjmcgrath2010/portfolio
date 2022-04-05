import React from 'react';
import { AppLayout } from "@layouts";


import ProjectPageProps from './types';

const ProjectPage = (props: ProjectPageProps) => (
  <AppLayout>
    <h1>ProjectPage Layout</h1>
  </AppLayout>
);

ProjectPage.defaultProps = {};

export default ProjectPage;