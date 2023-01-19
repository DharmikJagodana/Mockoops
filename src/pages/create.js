import Layout from "components/App/Layout";
import RenderHandler from "lib/handleRender";
import Head from "next/head";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const CreatePage = () => {
  useEffect(() => {
    toast.error(
      "Hey, sorry for the inconvinience but Mockoops is down right now 🥲. Please check back in a few hours."
    );
  }, []);

  return (
    <>
      <Head>
        <title>Create | Mockoops</title>
      </Head>
      <Layout />
      <RenderHandler />
    </>
  );
};

export default CreatePage;
