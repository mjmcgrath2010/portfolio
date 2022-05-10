import React from "react";
import Head from "next/head";
import styled from "styled-components";

import NavBar from "@components/NavBar";

import AppLayoutProps from "./types";
import Footer from "./Footer";

const AppLayout = ({ children, className }: AppLayoutProps) => (
  <>
    <Head>
      <title>Mike McGrath - Software Engineer</title>
      <meta name="description" content="Personal Portfolio and Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar>
      <NavBar.Logo />
      <NavBar.Routes />
    </NavBar>
    {children}
    <Footer />
  </>
);

AppLayout.defaultProps = {};

export default AppLayout;
