import type { NextPage } from "next";
import Head from "next/head";
import { getCountries, mapQueriesToProps } from "@graphql-client/static";

const Home: NextPage = ({ countries }: any) => {
  return (
    <div>
      <Head>
        <title>Mike McGrath - Software Engineer</title>
        <meta name="description" content="Personal Portfolio and Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Coming soon!</h1>
      {JSON.stringify(countries)}
    </div>
  );
};
export const getStaticProps = () =>
  mapQueriesToProps([{ countries: getCountries }]);

export default Home;
