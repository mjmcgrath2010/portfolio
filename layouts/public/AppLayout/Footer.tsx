import React from "react";
import styled from "styled-components";
import Section from "@components/Section/index";
import Grid from "@components/Grid";
import dayjs from "dayjs";
import Typography from "@components/Typography";

const CreditContainer = styled.div`
  display: block;
  position: relative;
  margin: ${({ theme }) => theme.spacing.md} auto;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
`;

const Footer = () => {
  return (
    <Section color="dark">
      <Grid justifyContent="center" alignItems="center">
        <Grid.Item mobile={12}>
          <CreditContainer>
            <Typography fontStyle="body" color="light">
              Built with ♥️ in Boston, MA
            </Typography>
            <Typography fontStyle="body" color="light">
              Mike McGrath, © {dayjs().format("YYYY")}
            </Typography>
          </CreditContainer>
        </Grid.Item>
      </Grid>
    </Section>
  );
};

export default Footer;
