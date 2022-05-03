import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import { AppLayout } from "@layouts";
import Grid from "@components/Grid";
import Image from "@components/Image";

const About: NextPage = () => (
  <AppLayout>
    <Grid>
      <Grid.Item mobile={12} justifySelf="center">
        <h1>About Page</h1>
      </Grid.Item>

      <Grid.Item mobile={12} desktop={4} justifySelf="center">
        <Image
          alt="me and les"
          src="/assets/images/static/about-me-picture.jpeg"
        />
      </Grid.Item>
    </Grid>
  </AppLayout>
);

export default About;
