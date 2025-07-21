import React from "react";
import "./IntroCards.css";

function IntroCards() {
  return (
    <section className="intro-cards-section">
      <div className="container">
        {}
        <div className="intro-cards-head">
          <h2>Your Digital Wallet for EUR and PLN</h2>
          <p>
            Open your EUR and PLN accounts in just a few minutes. Great for
            everyday money matters when living or working in Europe
          </p>
          {}
          <a href="#" className="btn btn-violet">
            Get the app
          </a>
        </div>

        {}
        <div className="intro-cards-content">
          <div className="intro-card">
            {}
            <div className="card-title">
              Local payments
              <br />
              in PLN
            </div>
          </div>
          <div className="intro-card">
            <div className="card-title">
              European SEPA payments
              <br />
              in EUR
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroCards;
