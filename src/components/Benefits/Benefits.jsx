import React from "react";
import "./Benefits.css";

const benefitsData = [
  {
    title: "Taxas baixas e preços transparentes",
    description:
      "Sem custos escondidos. Você sempre sabe exatamente o quanto paga.",
  },
  {
    title: "Suporte Multilíngue ao Vivo",
    description:
      "Nossa equipe está pronta para ajudar em diversos idiomas, incluindo ucraniano.",
  },
  {
    title: "Totalmente seguro e em conformidade",
    description:
      "Seguimos as mais rígidas normas de segurança e proteção de dados (GDPR/AML).",
  },
];

function Benefits() {
  return (
    <section className="benefits-section">
      <div className="container benefits-container">
        <div className="benefits-content-sticky animate-on-load fade-in-up">
          <h2>Por que NovaPay?</h2>
          <p>
            Cartões virtuais seguros vinculados às suas contas em EUR ou PLN.
            Perfeito para compras online e pagamentos por aproximação.
          </p>
        </div>
        <div className="benefits-cards-wrapper">
          {benefitsData.map((benefit, index) => (
            <div
              className={`benefit-card animate-on-load fade-in-up delay-${
                (index + 1) * 200
              }`}
              key={index}
            >
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
