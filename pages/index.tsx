import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Head>
        <title>VIPS CRM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
