import React from "react";
import "./ComplaintsProcedure.css";

const stepsData = [
  {
    step: "Passo 1",
    description:
      "Inclua o seu nome, informações de contacto e uma breve descrição do problema.",
  },
  {
    step: "Passo 2",
    description: (
      <>
        Envie através da app ou envie-nos um email para{" "}
        <a href="mailto:teste@novapay.lt">teste@novapay.lt</a>
      </>
    ),
  },
  {
    step: "Passo 3",
    description:
      "O nosso parceiro Quicko entrará em contacto consigo assim que tiver uma solução.",
  },
];

function ComplaintsProcedure() {
  return (
    <section className="complaints-section">
      <div className="container">
        <div className="complaints-main-card">
          <div className="complaints-header">
            <h2 className="complaints-title">
              Não está Satisfeito? <br /> Vamos Resolver
            </h2>
            <p className="complaints-subtitle">
              Se algo estiver errado, enviaremos a sua reclamação ao nosso
              parceiro de confiança Quicko para uma análise e solução rápidas.
            </p>
            <a href="#" className="btn btn-outline-light">
              Veja Como Lidamos com Reclamações
            </a>
          </div>

          <div className="complaints-steps-wrapper">
            {stepsData.map((item, index) => (
              <div className="complaint-step-card" key={index}>
                <div className="step-number">{item.step}</div>
                <p className="step-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComplaintsProcedure;
