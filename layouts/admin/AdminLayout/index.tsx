import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import AdminLayoutProps from "./types";

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/api/auth/signin");
  }

  return (
    <>
      <Head>
        <title>Mike McGrath - Admin Panel</title>
        <meta name="description" content="Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

AdminLayout.defaultProps = {};

export default AdminLayout;
