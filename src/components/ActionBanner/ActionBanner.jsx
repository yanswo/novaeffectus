import React from "react";
import "./ActionBanner.css";

function ActionBanner() {
  return (
    <section className="action-banner-section">
      <div className="container animate-on-load fade-in-up">
        <h2 className="action-banner-title">Simplifique Suas Finanças Hoje</h2>
        <div className="action-banner-button-wrapper">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <a href="#" className="btn btn-primary btn-large">
            Baixe o App
          </a>
        </div>
      </div>
    </section>
  );
}

export default ActionBanner;
