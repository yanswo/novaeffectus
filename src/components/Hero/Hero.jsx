import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-text-content">
          <h1 className="hero-title">Serviços Financeiros Feitos para Você.</h1>
          <p className="hero-subtitle">
            Abra contas, obtenha cartões virtuais, envie dinheiro e pague — tudo
            em um só app, de qualquer lugar, em poucos toques.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">
              Baixe o App
            </a>
          </div>
        </div>
        <div className="hero-media-content">
          <img
            src="https://placehold.co/600x500/0a192f/00f5c3?text=NovaPay+App"
            alt="Aplicativo NovaPay"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
