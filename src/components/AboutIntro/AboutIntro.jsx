import React from "react";
import "./AboutIntro.css";

function AboutIntro() {
  return (
    <section className="about-intro-section">
      <div className="container">
        <h2 className="about-intro-title">
          O Seu Parceiro Financeiro Inteligente na Europa
        </h2>
        <div className="about-intro-grid">
          <div className="grid-item person-image-card">
            <img
              src="https://images.unsplash.com/photo-1593452309922-239d44758432?q=80&w=1887&auto=format&fit=crop"
              alt="Homem a usar o telemóvel"
            />
          </div>

          <div className="grid-item main-text-card">
            <h3>
              Estamos a construir uma forma melhor de gerir o dinheiro
              diretamente do seu telemóvel
            </h3>
          </div>

          <div className="grid-item phone-screen-card">
            <p>Simples, rápido e construído a pensar em si</p>
            <div className="fake-phone-screen">
              <div className="fake-phone-header">20:09</div>
              <div className="fake-app-icons">
                <div className="app-icon novapay-icon">
                  <span>NovaPay</span>
                </div>
                <div className="app-icon">
                  <span>App Store</span>
                </div>
                <div className="app-icon">
                  <span>Camera</span>
                </div>
                <div className="app-icon">
                  <span>Fotos</span>
                </div>
              </div>
            </div>
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
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/crypto-coins-7539213-6169279.png"
              alt="Moedas a flutuar"
              className="coins-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
