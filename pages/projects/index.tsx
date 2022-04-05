import React from 'react';
import type { NextPage } from "next";
import styled from "styled-components";

import { AppLayout } from "@layouts";
import Grid from "@components/Grid";

const ProjectsIndex: NextPage = () => (
  <AppLayout>
      <Grid>
        <Grid.Item mobile={12} justifySelf="center">
          <h1>ProjectsIndex Page</h1>
        </Grid.Item>
      </Grid>
  </AppLayout>
);

export default ProjectsIndex;