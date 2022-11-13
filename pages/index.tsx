import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>VIPS CRM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Left Nav */}
      <Navbar />
    </div>
  );
};

export default Home;
