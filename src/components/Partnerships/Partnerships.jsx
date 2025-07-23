import React from "react";
import coins from "../../assets/coins.png";
import { Link } from "react-router-dom";
import "./Partnerships.css";

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
  </svg>
);

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
              src={coins}
              alt="Moedas a flutuar"
              className="background-coins"
            />
            <div className="glass-card">
              <h3>Você em Primeiro Lugar</h3>
              <p>
                Entendemos as suas necessidades e falamos a sua língua. É por
                isso que a nossa equipa de suporte está aqui para si 24/7 — em
                português e inglês.
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
                  <span className="time">9:41</span>
                  <div className="island-icons"></div>
                </div>
                <h2 className="screen-main-title">Suporte</h2>
                <p className="support-subtitle">Suporte dedicado 24/7</p>

                <div className="support-option-card chat-card">
                  <div className="icon-wrapper">
                    <ChatIcon />
                  </div>
                  <div className="text-wrapper">Chat</div>
                  <span className="arrow-right">></span>
                </div>

                <div className="support-option-card">
                  <div className="icon-wrapper">
                    <EmailIcon />
                  </div>
                  <div className="text-wrapper">
                    {}
                    internationalsupport@novaeffectus.com
                    <span>Contactar por email</span>
                  </div>
                  <span className="arrow-right">></span>
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
