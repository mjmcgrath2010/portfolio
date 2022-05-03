import React from "react";
import type { NextPage } from "next";

import { AppLayout } from "@layouts";
import Grid from "@components/Grid";
import Image from "@components/Image";

const About: NextPage = () => (
  <AppLayout>
    <Grid>
      <Grid.Item mobile={12} justifySelf="center">
        <h1>About Me</h1>
      </Grid.Item>

      <Grid.Item mobile={12} desktop={4} justifySelf="center">
        <Image
          alt="me and les"
          src="/assets/images/static/about-me-picture.jpeg"
        />
      </Grid.Item>
      <Grid.Item mobile={12} desktop={8}>
        Hello! My name is Mike McGrath and I&apos;m a Senior Frontend Software
        Engineer! I&apos;m working on finishing off my portfolio and blog. Check
        back soon!
      </Grid.Item>
    </Grid>
  </AppLayout>
);

export default About;
