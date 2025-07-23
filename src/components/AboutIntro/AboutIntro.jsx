import React from "react";
import segurar from "../../assets/segurando-celular.jpg";
import "./AboutIntro.css";
import coins from "../../assets/coins.png";

function AboutIntro() {
  return (
    <section className="about-intro-section">
      <div className="container">
        <h2 className="about-intro-title">
          O Seu Parceiro Financeiro Inteligente na Europa
        </h2>
        <div className="about-intro-grid">
          <div className="grid-item person-image-card">
            <img src={segurar} alt="Homem a usar o telemóvel" />
          </div>

          <div className="grid-item main-text-card">
            <h3>
              Estamos a construir uma forma melhor de gerir o dinheiro
              diretamente do seu telemóvel
            </h3>
          </div>

          {}
          <div className="grid-item phone-screen-card">
            <p>Simples, rápido e construído a pensar em si</p>
            {}
          </div>

          <div className="grid-item goal-text-card">
            <p>
              <strong>O nosso objetivo?</strong> Tornarmo-nos a plataforma de
              eleição para pessoas que valorizam confiança, clareza e apoio
              real.
            </p>
          </div>

          <div className="grid-item coins-card">
            <p>
              Das compras online aos pagamentos contactless — é tudo simples e
              seguro com a NovaPay
            </p>
            <img src={coins} alt="Moedas a flutuar" className="coins-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
