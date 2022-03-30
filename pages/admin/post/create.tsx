import React, { useState } from "react";
import styled from "styled-components";
import type { NextPage } from "next";

import Head from "next/head";
import { useSession } from "next-auth/react";
import RichTextEditor from "@components/RichTextEditor";

const Container = styled.div`
  position: relative;
  height: 100%;
  background: ${({ theme }) => theme.colors.white_200};
  color: ${({ theme }) => theme.palette.text.dark};
`;
const Admin: NextPage = () => {
  const { data: session } = useSession();
  const [body, setBody] = useState("");

  console.log(body);

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
        <RichTextEditor onChange={(update: any) => setBody(update)} />
      </Container>
    </div>
  );
};

export default Admin;
