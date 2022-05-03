import React from "react";
import styled from "styled-components";
import Section from "@components/Section/index";
import Grid from "@components/Grid";
import dayjs from "dayjs";
import Typography from "@components/Typography";

const FooterContainer = styled(Section)`
  height: 200px;
`;

const CreditContainer = styled.div`
  display: block;
  position: relative;
  margin: ${({ theme }) => theme.spacing.md} auto;
  text-align: center;
  width: 100%;
  padding-top: 188px;
`;

const Footer = () => {
  return (
    <FooterContainer color="dark">
      <Grid justifyContent="center" alignItems="center">
        <Grid.Item mobile={12} desktop={12} tablet={12}>
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
    </FooterContainer>
  );
};

export default Footer;
