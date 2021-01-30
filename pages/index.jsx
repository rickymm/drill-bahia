import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import GlobalStyles from "../styles/global";
import Hero from "../components/sections/hero";

const Home = () => {
  return (
    <main>
      <Head>
        <title>Drill Bahia</title>
        <meta
          name="description"
          content="Empresa especializada em perfuraçōes MND."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <GlobalStyles />
      <Navbar />
      <section name="main">
        <Hero />
      </section>
      <div id="about" style={{ display: "grid", height: "100vh" }}>
        <h1>Teste</h1>
      </div>
    </main>
  );
};

export default Home;
