import React from "react";
import GlobalStyles from "../styles/global";
import Head from "../components/head";
import Navbar from "../components/navbar";
import Hero from "../components/sections/hero";
import Infos from "../components/sections/infos";
import About from "../components/sections/about";
import Partners from "../components/sections/partners";
import Contact from "../components/sections/contact";
import Footer from "../components/footer";

const Home = () => {
  return (
    <main>
      <Head />
      <GlobalStyles />
      <Navbar />
      <section name="hero">
        <Hero />
      </section>
      <section name="business">
        <Infos />
      </section>
      <section name="about">
        <About />
      </section>
      <section name="partners">
        <Partners />
      </section>
      <section name="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
