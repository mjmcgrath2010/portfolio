import React from "react";
import styled from "styled-components";
import type { NextPage } from "next";

import Head from "next/head";
import { useSession } from "next-auth/react";
import RichTextEditor from "@components/RichTextEditor";

const Container = styled.div`
  background: blue;
  position: relative;
  height: 100%;
`;
const Admin: NextPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <h1>Please Sign in</h1>;
  }
  return (
    <div>
      <Head>
        <title>Mike McGrath - Software Engineer</title>
        <meta name="description" content="Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <RichTextEditor />
      </Container>
    </div>
  );
};

export default Admin;
