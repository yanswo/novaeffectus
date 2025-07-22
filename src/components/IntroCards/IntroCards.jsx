import React from "react";
import "./IntroCards.css";

const cardsData = [
  {
    title: "Pagamentos locais\u2028em PLN",
    bgChar: "PLN",
    imageUrl:
      "#https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Pagamentos europeus (SEPA)\u2028em EUR",
    bgChar: "€",
    imageUrl:
      "#https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function IntroCards() {
  return (
    <section className="intro-cards-section">
      <div className="container">
        <div className="intro-cards-head">
          <h2 className="intro-cards-title h3">
            Sua Carteira Digital para EUR e PLN
          </h2>
          <div className="intro-cards-text">
            <p>
              Abra suas contas em EUR e PLN em poucos minutos. Ótimo para as
              finanças do dia a dia ao viver ou trabalhar na Europa.
            </p>
          </div>
          <a href="#" className="btn btn-violet">
            Baixe o App
          </a>
        </div>

        <div className="intro-cards-content">
          {cardsData.map((card, index) => (
            <div className="intro-card" key={index}>
              <div className="card-background-char">{card.bgChar}</div>
              <img src={card.imageUrl} className="card-image" alt="" />
              <div className="intro-card-title">{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroCards;
