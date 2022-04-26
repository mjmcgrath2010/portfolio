import type { NextPage } from "next";
import Head from "next/head";
import { GetPost } from "@gql/queries";
import { useQuery } from "@apollo/client";

const Admin: NextPage = ({}: any) => {
  const { data, loading, error } = useQuery(GetPost, {
    variables: {
      data: {
        _id: "6244f1b3a01862e1a4ba500c",
      },
    },
  });

  console.log(data, loading, error);
  return (
    <div>
      <Head>
        <title>Mike McGrath - Software Engineer</title>
        <meta name="description" content="Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Edit Post:</h1>
    </div>
  );
};

export default Admin;
