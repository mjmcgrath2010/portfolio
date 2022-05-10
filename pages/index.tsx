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
  position: fixed;
  display: block;
  width: 100%;
  height: 100vh;
  padding-top: 20vh;
  margin-top: 0;
  background: url("/assets/images/homepage-background.jpg") center repeat;
  background-size: cover;
  background-attachment: fixed;
  color: ${({ theme }) => theme.palette.text.light};
  top: 0;
  left: 0;
`;

const WorkLogoContainer = styled(Grid).attrs({
  alignContent: "center",
})`
  column-gap: ${({ theme }) => theme.spacing.xl};
  row-gap: 84px;
`;

const ImageContainer = styled(Grid.Item).attrs({
  justifySelf: "center",
  alignSelf: "center",
  mobile: 12,
  desktop: 4,
  tablet: 6,
})``;

const CompanyLogo = styled(Image)`
  max-width: 350px;
  cursor: pointer;
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
  background: ${({ theme }) => theme.colors.gray_200};
  position: relative;
  margin-top: 100vh;
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
        <Section color="light">
          <Grid.Item mobile={12}>
            <Typography fontStyle="heading1">Work Experience</Typography>
          </Grid.Item>
          <WorkLogoContainer>
            <ImageContainer>
              <CompanyLogo
                alt="attentive-mobile"
                src="/assets/images/work-logos/attentive-logo-yellow.png"
              />
            </ImageContainer>

            <ImageContainer>
              <CompanyLogo
                alt="privy-logo"
                src="/assets/images/work-logos/privy-logo-purple.png"
              />
            </ImageContainer>

            <ImageContainer>
              <CompanyLogo
                alt="attentive-mobile"
                src="/assets/images/work-logos/hapyak-logo-color.png"
              />
            </ImageContainer>

            <ImageContainer>
              <CompanyLogo
                alt="attentive-mobile"
                src="/assets/images/work-logos/tolemi-logo-white.png"
              />
            </ImageContainer>
          </WorkLogoContainer>
        </Section>

        <Section color="secondary">
          <Grid.Item>
            <Typography fontStyle="heading1" color="light">
              Featured Work
            </Typography>
          </Grid.Item>
        </Section>

        <Section color="light">
          <Grid.Item>
            <Typography fontStyle="heading1" color="dark">
              Featured Posts
            </Typography>
          </Grid.Item>
        </Section>

        <Section color="accent">
          <Grid.Item>
            <Typography fontStyle="heading1" color="light">
              Get in touch
            </Typography>
          </Grid.Item>
        </Section>
      </ContentContainer>
    </AppLayout>
  );
};

export default Home;
