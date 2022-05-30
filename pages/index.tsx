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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Stowarzyszenie Badania i Rozwoju Gier GameUp"
        />
        <meta property="og:url" content="https://gameup.org.pl" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Stowarzyszenie Badania i Rozwoju Gier GameUp"
        />
        <meta property="og:description" content="TBD" />
        <meta property="og:image" content="TBD" />
        <meta property="twitter:card" content="summary" />
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
