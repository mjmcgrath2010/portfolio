import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import { AppLayout } from "@layouts";
import Grid from "@components/Grid";

const HeroContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  padding-top: 70px;
  margin-top: 0;
  background: url("/assets/images/homepage-background.jpg") center repeat;
  background-size: cover;
  background-attachment: fixed;
  color: ${({ theme }) => theme.palette.text.light};
`;

const ContentContainer = styled.div`
  z-index: 200;
  min-height: 800px;
`;

const Home: NextPage = () => {
  return (
    <AppLayout>
      <HeroContainer>
        <Grid>
          <Grid.Item mobile={12} justifySelf="center">
            <h1>Under construction, check back soon!</h1>
          </Grid.Item>
        </Grid>
      </HeroContainer>
      <ContentContainer>
        <Grid>
          <Grid.Item mobile={12}>About Me</Grid.Item>
          <Grid.Item mobile={12}>Featured Posts</Grid.Item>
          <Grid.Item mobile={12}>Experience</Grid.Item>
          <Grid.Item mobile={12}>Contact Me</Grid.Item>
        </Grid>
      </ContentContainer>
    </AppLayout>
  );
};

export default Home;
