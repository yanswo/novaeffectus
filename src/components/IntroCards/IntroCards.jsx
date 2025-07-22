import React from "react";
import "./IntroCards.css";

const IconWallet = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m15 6a2.25 2.25 0 002.25-2.25M5.25 15c0 .621.504 1.125 1.125 1.125h.008c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-.008A1.125 1.125 0 005.25 13.5v1.5z"
    />
  </svg>
);
const IconGlobe = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c.504 0 1.002-.062 1.49-.178M12 21a9.004 9.004 0 01-5.99-1.423M12 21a9.004 9.004 0 005.99-1.423m0 0l-3.172-3.172m-2.828 0l-3.172-3.172m6.344 0l-3.172 3.172m-2.828 0l-3.172 3.172M3.25 9.25l3.172 3.172m0 0l3.172 3.172m0 0l3.172-3.172m3.172-3.172l-3.172-3.172"
    />
  </svg>
);

const cardsData = [
  {
    icon: <IconWallet />,
    title: "Pagamentos locais em PLN",
    description:
      "Realize pagamentos na Polônia com a mesma facilidade de uma conta local.",
  },
  {
    icon: <IconGlobe />,
    title: "Pagamentos europeus (SEPA) em EUR",
    description:
      "Transfira euros para toda a Europa de forma rápida e segura através da rede SEPA.",
  },
];

function IntroCards() {
  return (
    <section className="intro-cards-section">
      <div className="container">
        <div className="section-header">
          <h2>Sua Carteira Digital para EUR e PLN</h2>
          <p>
            Abra suas contas em EUR e PLN em poucos minutos. Ótimo para as
            finanças do dia a dia ao viver ou trabalhar na Europa.
          </p>
        </div>
        <div className="intro-cards-grid">
          {cardsData.map((card, index) => (
            <div className="intro-card" key={index}>
              <div className="intro-card-icon">{card.icon}</div>
              <h3 className="intro-card-title">{card.title}</h3>
              <p className="intro-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroCards;
