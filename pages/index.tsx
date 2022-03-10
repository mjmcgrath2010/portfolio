import type { NextPage } from "next";
import Head from "next/head";
import { getCountries } from "@graphql-client/queries/countries";

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

export const getStaticProps = async () => {
  return { props: { countries: await (await getCountries()).props.countries } };
};

export default Home;
