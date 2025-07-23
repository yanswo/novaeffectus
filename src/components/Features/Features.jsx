import React from "react";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import "./Features.css";

const Features = () => {
  const featuresData = [
    {
      title: "Pagamentos Móveis Instantâneos",
      description:
        "Envie e receba dinheiro instantaneamente com amigos e familiares, tudo a partir do seu telemóvel.",
      // A variável agora guarda a imagem importada
      imageUrl: first,
    },
    {
      title: "Cartões Virtuais Seguros",
      description:
        "Crie cartões virtuais descartáveis para compras online seguras e proteja as suas informações financeiras.",
      imageUrl: second,
    },
    {
      title: "Gestão Financeira Simplificada",
      description:
        "Acompanhe facilmente os seus gastos, defina orçamentos e analise as suas finanças num só lugar.",
      imageUrl: third,
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">
          Funcionalidades Poderosas na Palma da Sua Mão
        </h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-phone-mockup">
                <div className="feature-phone-screen">
                  {/* ✅ A MUDANÇA ESTÁ AQUI: Usamos a prop 'style' 
                    para definir o backgroundImage dinamicamente.
                  */}
                  <div
                    className="screen-content"
                    style={{ backgroundImage: `url(${feature.imageUrl})` }}
                  ></div>
                </div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
