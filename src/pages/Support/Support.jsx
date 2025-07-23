import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import SupportOptions from "../../components/SupportOptions/SupportOptions";
import FraudPrevention from "../../components/FraudPrevention/FraudPrevention";
import ComplaintsProcedure from "../../components/ComplaintsProcedure/ComplaintsProcedure";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import "./Support.css";

function Support() {
  const supportTitle = (
    <>
      Precisa de auxilío?
      <br />
      <br />
      <br />
    </>
  );
  const supportText =
    "Estamos aqui 24 horas por dia, 7 dias por semana para responder às suas perguntas, resolver problemas e manter você em movimento.";

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
    <div className="support-page">
      <Header theme="theme-light" />
      <main>
        <Hero title={supportTitle} text={supportText} showButton={false} />
        <SupportOptions />
        <FraudPrevention />
        <ComplaintsProcedure />
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

export default Support;
