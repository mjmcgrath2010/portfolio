import React from "react";
import Head from "next/head";

import NavBar from "@components/NavBar";

import AppLayoutProps from "./types";

const AppLayout = ({ children }: AppLayoutProps) => (
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
  </>
);

AppLayout.defaultProps = {};

export default AppLayout;
