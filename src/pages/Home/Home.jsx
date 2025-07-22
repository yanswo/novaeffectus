import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import IntroCards from "../../components/IntroCards/IntroCards";
import Features from "../../components/Features/Features";
import MainBanner from "../../components/MainBanner/MainBanner";
import Benefits from "../../components/Benefits/Benefits";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

function Home() {
  const [headerTheme, setHeaderTheme] = useState("theme-light");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  const heroRef = useRef(null);
  const introCardsRef = useRef(null);
  const featuresRef = useRef(null);
  const mainBannerRef = useRef(null);
  const benefitsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: heroRef, theme: "theme-light" },
      { ref: introCardsRef, theme: "theme-dark" },
      { ref: featuresRef, theme: "theme-light" },
      { ref: mainBannerRef, theme: "theme-dark" },
      { ref: benefitsRef, theme: "theme-light" },
      { ref: footerRef, theme: "theme-light" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionData = sections.find(
              (s) => s.ref.current === entry.target
            );
            if (sectionData) {
              setHeaderTheme(sectionData.theme);
            }
          }
        });
      },
      {
        rootMargin: "-85px 0px -90% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header theme={headerTheme} />
      <main>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={introCardsRef}>
          <IntroCards />
        </div>
        <div ref={featuresRef}>
          <Features />
        </div>
        <div ref={mainBannerRef}>
          <MainBanner />
        </div>
        <div ref={benefitsRef}>
          <Benefits />
        </div>
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>
      <ScrollToTopButton
        isVisible={showScrollButton}
        isOverFooter={isOverFooter}
      />
    </>
  );
}

export default Home;
