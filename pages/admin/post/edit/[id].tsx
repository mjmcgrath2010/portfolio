import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";

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
      <h1>Admin Panel</h1>
    </div>
  );
};

export default Admin;
