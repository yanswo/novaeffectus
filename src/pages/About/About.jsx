import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import AboutIntro from "../../components/AboutIntro/AboutIntro";
import Partnerships from "../../components/Partnerships/Partnerships";
import Footer from "../../components/Footer/Footer";

function About() {
  const aboutTitle = (
    <>
      Uma nova Abordagem
      <br />
      Para Finanças na Europa
    </>
  );
  const aboutText =
    "Soluções financeiras simples, seguras e fáceis — construídas para a vida real.";

  return (
    <div className="about-page">
      <Header theme="theme-light" />
      <main>
        <Hero
          title={aboutTitle}
          text={aboutText}
          showButton={true}
          buttonText="Obtenha a App"
          buttonVariant="outline"
          layoutVariant="about"
          backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop"
        />
        <AboutIntro />

        {}
        <Partnerships />
      </main>
      <Footer />
    </div>
  );
}

export default About;
