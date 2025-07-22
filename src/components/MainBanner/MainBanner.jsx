import React from "react";
import "./MainBanner.css";

function MainBanner() {
  return (
    <section className="main-banner-section">
      <div className="container main-banner-container animate-on-load fade-in-up">
        <div className="main-banner-media">
          <img
            src="https://placehold.co/500x500/f8fafc/1e293b?text=Visual"
            alt="Demonstração do App"
          />
        </div>
        <div className="main-banner-content">
          <h2>Transferências Fáceis por toda a Europa</h2>
          <p>
            Envie dinheiro de forma rápida e sem preocupações. Seja em EUR ou
            PLN, nossas transferências suportam pagamentos locais e europeus —
            simples, seguro e pronto quando você precisar.
          </p>
          <a href="#" className="btn btn-primary">
            Baixe o App
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
