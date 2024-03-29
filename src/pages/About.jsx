import React, {useEffect} from "react";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/Items/SectionHeading";
import AboutSection from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import Clients from "../components/Sections/Clients";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <SectionHeading title="About Me" />
        <AboutSection />
      </section>

      <section className="shadow-blue white-bg padding">
        <SectionHeading title="My skills" />
        <Skills />
      </section>

      <Clients />
    </Layout>
  );
}

export default About;
