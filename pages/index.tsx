import type { NextPage } from "next";
import Head from "next/head";
import { getPosts, mapQueriesToProps } from "@gql/queries";

const Home: NextPage = ({ posts }: any) => {
  return (
    <div>
      <Head>
        <title>Mike McGrath - Software Engineer</title>
        <meta name="description" content="Personal Portfolio and Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Coming soon!</h1>
      {JSON.stringify(posts)}
    </div>
  );
};
export const getStaticProps = () => mapQueriesToProps([{ posts: getPosts }]);

export default Home;
