import React from "react";
import "./Features.css";

const featuresData = [
  {
    title: "Ativação Rápida",
    description:
      "Receba seu Mastercard virtual no app — pronto para usar imediatamente.",
    imageUrl: "https://placehold.co/580x520/0a192f/00f5c3?text=Setup",
  },
  {
    title: "Controle Total",
    description:
      "Gerencie seu cartão a qualquer momento — bloqueie, desbloqueie e ajuste configurações direto no app.",
    imageUrl: "https://placehold.co/580x520/0a192f/57b0f0?text=Dashboard",
  },
  {
    title: "Pagamentos Seguros",
    description:
      "Pague online e em lojas por toda a Europa com Mastercard — de forma fácil e segura.",
    imageUrl: "https://placehold.co/580x520/0a192f/ccd6f6?text=Segurança",
  },
];

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-content-box">
          {featuresData.map((feature, index) => (
            <div
              className={`feature-block animate-on-load fade-in-up delay-${
                (index + 1) * 200
              }`}
              key={index}
            >
              <div className="feature-image">
                <img src={feature.imageUrl} alt={feature.title} />
              </div>
              <div className="feature-text">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
