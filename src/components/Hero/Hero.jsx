import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-block">
        {}
        <div className="hero-background-image">
          {}
          <img
            src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop"
            alt="Fundo abstrato escuro"
          />
        </div>

        {}
        <div className="hero-wrapper">
          <div className="container">
            <div className="hero-content">
              <h1 className="h1">
                Serviços Financeiros <br />
                Feitos para Você
              </h1>
              <div className="hero-text">
                Abra contas, obtenha cartões virtuais, envie dinheiro e pague —
                tudo em um só app, de qualquer lugar, em poucos toques.
              </div>

              {}
              <a href="#" className="btn btn-white btn-large hero-btn-desktop">
                Baixe o App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
