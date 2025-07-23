import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import AboutIntro from "../../components/AboutIntro/AboutIntro";
import Partnerships from "../../components/Partnerships/Partnerships";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

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

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <Partnerships />
      </main>
      {}
      <div ref={footerRef}>
        <Footer />
      </div>
      {}
      <ScrollToTopButton
        isVisible={showScrollButton}
        isOverFooter={isOverFooter}
      />
    </div>
  );
}

export default About;
