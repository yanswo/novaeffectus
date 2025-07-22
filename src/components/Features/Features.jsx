import React from "react";
import "./Features.css";

const featuresData = [
  {
    title: "Ativação Rápida",
    description:
      "Receba seu Mastercard virtual no app — pronto para usar imediatamente.",
    imageUrl: "https://placehold.co/580x435/111111/FFFFFF?text=Card",
  },
  {
    title: "Controle Total",
    description:
      "Gerencie seu cartão a qualquer momento — bloqueie, desbloqueie e ajuste configurações direto no app.",
    imageUrl: "https://placehold.co/580x435/111111/FFFFFF?text=Phone+1",
  },
  {
    title: "Pagamentos Seguros",
    description:
      "Pague online e em lojas por toda a Europa com Mastercard — de forma fácil e segura.",
    imageUrl: "https://placehold.co/580x435/111111/FFFFFF?text=Phone+2",
  },
];

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-wrapper">
          <div className="features-content-box">
            {featuresData.map((feature, index) => (
              <div className="feature-block" key={index}>
                <span className="feature-image">
                  <span className="feature-image-inner">
                    <img src={feature.imageUrl} alt={feature.title} />
                  </span>
                </span>
                <div className="feature-content">
                  <h2 className="feature-title h2">{feature.title}</h2>
                  <div className="feature-text">
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
