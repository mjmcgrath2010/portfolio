import type { NextPage } from "next";
import Head from "next/head";
import { GetPost } from "@gql/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import RichTextEditor from "@components/RichTextEditor";

const Admin: NextPage = ({}: any) => {
  const router = useRouter();
  const { _id } = router.query;

  const { data, loading, error } = useQuery(GetPost, {
    variables: {
      data: {
        _id,
      },
    },
  });

  const { getPost: { title = "", description = "", body = [] } = {} } =
    data || {};

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <Head>
        <title>Mike McGrath - Software Engineer</title>
        <meta name="description" content="Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Edit Post: {title} </h1>
      <h4> {description} </h4>
      <RichTextEditor initialValue={JSON.parse(body)} />
    </div>
  );
};

export default Admin;
