import type { NextPage } from "next";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

import { getPosts, mapQueriesToProps } from "@gql/queries";

const Home: NextPage = ({ posts }: any) => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Mike McGrath - Software Engineer</title>
        <meta name="description" content="Personal Portfolio and Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Coming soon!</h1>
      {session ? (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
};
export const getStaticProps = () => mapQueriesToProps([{ posts: getPosts }]);

export default Home;
