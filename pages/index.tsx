import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Workshops from "../components/Workshops";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-300">
      <Head>
        <title>Stowarzyszenie Badania i Rozwoju Gier GameUp</title>
        <meta
          name="description"
          content="Stowarzyszenie Badania i Rozwoju Gier GameUp"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Workshops />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
