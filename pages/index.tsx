import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import { AppLayout } from "@layouts";
import Grid from "@components/Grid";
import AnimatedLogo from "@components/AnimatedLogo";
import Section from "@components/Section";
import Typography from "@components/Typography";
import Image from "@components/Image";

const HeroContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  padding-top: 20vh;
  margin-top: 0;
  background: url("/assets/images/homepage-background.jpg") center repeat;
  background-size: cover;
  background-attachment: fixed;
  color: ${({ theme }) => theme.palette.text.light};
  z-index: 1;
`;

const WorkLogoContainer = styled(Grid)`
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ImageContainer = styled(Grid.Item).attrs({
  justifySelf: "center",
  alignSelf: "center",
  mobile: 12,
  desktop: 4,
  tablet: 6,
})`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const HeroTextContainer = styled.div`
  width: 100%;
  position: fixed;
  height: fit-content;
  left: 0;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.xl};
`;

const ContentContainer = styled.div`
  z-index: 2;
  min-height: 800px;
  background: ${({ theme }) => theme.colors.gray_200};
  position: relative;
`;

const Home: NextPage = () => {
  return (
    <AppLayout>
      <HeroContainer>
        <Grid justifyItems="center">
          <Grid.Item mobile={12} justifySelf="center">
            <HeroTextContainer>
              <LogoContainer>
                <AnimatedLogo />
              </LogoContainer>
              <h1>Under construction, check back soon!</h1>
            </HeroTextContainer>
          </Grid.Item>
        </Grid>
      </HeroContainer>
      <ContentContainer>
        <Section color="dark">
          <Grid.Item mobile={12}>
            <Typography fontStyle="heading2">Work Experience</Typography>
          </Grid.Item>
          <WorkLogoContainer
            justifyContent="space-evenly"
            alignItems="center"
            alignContent="center"
            justifyItems="center"
          >
            <ImageContainer>
              <Image
                alt="privy-logo"
                src="/assets/images/work-logos/privy-logo-purple.png"
              />
            </ImageContainer>

            <ImageContainer>
              <Image
                alt="attentive-mobile"
                src="/assets/images/work-logos/attentive-logo-yellow.png"
              />
            </ImageContainer>

            <ImageContainer>
              <Image
                alt="attentive-mobile"
                src="/assets/images/work-logos/hapyak-logo-color.png"
              />
            </ImageContainer>

            <ImageContainer>
              <Image
                alt="attentive-mobile"
                src="/assets/images/work-logos/tolemi-logo-white.png"
              />
            </ImageContainer>
          </WorkLogoContainer>
        </Section>

        <Section color="accent">
          <Grid>
            <Grid.Item mobile={12}>
              <Typography color="light" fontStyle="heading2">
                Featured Projects
              </Typography>
            </Grid.Item>
          </Grid>
        </Section>

        <Section>
          <Grid>
            <Grid.Item mobile={12}>
              <Typography fontStyle="heading2">Featured Blog Posts</Typography>
            </Grid.Item>
          </Grid>
        </Section>

        <Section color="accent">
          <Grid>
            <Grid.Item mobile={12}>
              <Typography color="light" fontStyle="heading2">
                Drop me a line
              </Typography>
            </Grid.Item>
          </Grid>
        </Section>
      </ContentContainer>
    </AppLayout>
  );
};

export default Home;
