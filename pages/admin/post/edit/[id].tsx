import type { NextPage } from "next";
import Head from "next/head";
import { getPost, mapQueriesToProps } from "@gql/queries";

const Admin: NextPage = ({ post, ...rest }: any) => {
  console.log(post);
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

export const getServerSideProps = async () =>
  mapQueriesToProps([{ post: getPost("6244f1b3a01862e1a4ba500c") }]);

export default Admin;
