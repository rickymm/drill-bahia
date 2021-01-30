import React from "react";
import GlobalStyles from "../styles/global";
import Head from "../components/head";
import Navbar from "../components/navbar";
import Hero from "../components/sections/hero";
import Infos from "../components/sections/infos";
import About from "../components/sections/about";

const Home = () => {
  return (
    <main>
      <Head />
      <GlobalStyles />
      <Navbar />
      <section name="main">
        <Hero />
      </section>
      <section name="infos">
        <Infos />
      </section>
      <section name="about">
        <About />
      </section>
    </main>
  );
};

export default Home;
