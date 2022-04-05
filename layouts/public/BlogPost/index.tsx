import React from 'react';
import styled from "styled-components";

import { AppLayout } from "@layouts";
import Grid from "@components/Grid";

import BlogPostProps from './types';

const BlogPost = (props: BlogPostProps) => (
  <AppLayout>
    <Grid>
      <Grid.Item mobile={12} justifySelf="center">
        <h1>Coming soon!</h1>
      </Grid.Item>
    </Grid>
  </AppLayout>
);

BlogPost.defaultProps = {};

export default BlogPost;