import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import SupportOptions from "../../components/SupportOptions/SupportOptions";
import FraudPrevention from "../../components/FraudPrevention/FraudPrevention";
import ComplaintsProcedure from "../../components/ComplaintsProcedure/ComplaintsProcedure";
import Footer from "../../components/Footer/Footer";
import "./Support.css";

function Support() {
  const supportTitle = "Precisa de Ajuda?";
  const supportText =
    "Estamos aqui 24 horas por dia, 7 dias por semana para responder às suas perguntas, resolver problemas e manter você em movimento.";

  return (
    <div className="support-page">
      <Header theme="theme-light" />
      <main>
        <Hero title={supportTitle} text={supportText} showButton={false} />
        <SupportOptions />
        <FraudPrevention />

        {}
        <ComplaintsProcedure />
      </main>
      <Footer />
    </div>
  );
}

export default Support;
