import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex relative flex-row  bg-[#cab8ea]/10  text-purple-900 ">
      <Head>
        <title>VIPS CRM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="navbar">
        <Navbar />
      </section>

      <section id="">
        <Header />
        <Hero />
      </section>
    </div>
  );
};

export default Home;
