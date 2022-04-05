import React from "react";
import styled from "styled-components";

import Grid from "@components/Grid";
import { AppLayout } from "@layouts";

import ProjectPageProps from "./types";

const ProjectPage = (props: ProjectPageProps) => (
  <AppLayout>
    <Grid>
      <Grid.Item justifySelf="center">
        <h1>ProjectPage Layout</h1>
      </Grid.Item>
    </Grid>
  </AppLayout>
);

ProjectPage.defaultProps = {};

export default ProjectPage;
