import React from "react";
import { Link } from "react-router-dom";
import "./Partnerships.css";

function Partnerships() {
  return (
    <section className="partnerships-section">
      <div className="container">
        {}
        <div className="trusted-partnerships">
          <h2 className="section-title">
            Parcerias de Confiança para Melhores Serviços
          </h2>
          <p className="section-subtitle">
            Trabalhamos com instituições líderes em toda a Europa para lhe
            trazer serviços com os quais pode contar — rápidos, estáveis e
            eficientes.
          </p>
          <a href="#" className="partners-link">
            Os nossos parceiros →
          </a>
          <div className="partner-logos">
            <span className="logo-quicko">QUICKO</span>
            <span className="logo-ondato">ondato</span>
          </div>
        </div>

        {}
        <div className="you-come-first">
          <div className="you-come-first-left">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/crypto-coins-7539213-6169279.png"
              alt="Moedas a flutuar"
              className="background-coins"
            />
            <div className="glass-card">
              <h3>Você em Primeiro Lugar</h3>
              <p>
                Entendemos as suas necessidades e falamos a sua língua. É por
                isso que a nossa equipa de suporte está aqui para si 24/7 — em
                inglês, polaco e ucraniano.
              </p>
              <Link to="/suporte" className="btn btn-support">
                Suporte
              </Link>
            </div>
          </div>
          <div className="you-come-first-right">
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-screen-ui">
                <div className="support-header">
                  <span className="arrow-back">←</span>
                  <span className="header-title">Support</span>
                  <span className="time">9:41</span>
                </div>
                <p className="support-subtitle">Caring support 24/7</p>
                <div className="support-option">Chat</div>
                <div className="support-option">
                  +370 5 208 4800<span>For calls from EU</span>
                </div>
                <div className="support-option">
                  cc@novapay.lt<span>Contact via email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnerships;
