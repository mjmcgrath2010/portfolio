import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import { AppLayout } from "@layouts";
import Grid from "@components/Grid";

const HeroContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  background: url("/assets/images/homepage-background.jpg") center;
  background-size: cover;
  color: ${({ theme }) => theme.palette.text.light};
`;

const Home: NextPage = () => {
  return (
    <AppLayout>
      <HeroContainer>
        <Grid>
          <Grid.Item mobile={12} justifySelf="center">
            <h1>Coming soon!</h1>
          </Grid.Item>
        </Grid>
      </HeroContainer>
    </AppLayout>
  );
};

export default Home;
