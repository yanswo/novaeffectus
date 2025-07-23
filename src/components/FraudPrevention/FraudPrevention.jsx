import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import email from "../../assets/email.png";
import protec from "../../assets/protection.png";
import "./FraudPrevention.css";

const fraudCardsData = [
  {
    text: "Mantenha os detalhes da sua conta privados",
    bgColorClass: "card-bg-purple",
    imageUrl:
      "https://cdn3d.iconscout.com/3d/premium/thumb/crypto-coin-with-wings-5691539-4741048.png",
  },
  {
    text: "Verifique sempre os e-mails e mensagens de texto que enviamos",
    bgColorClass: "card-bg-blue",
    imageUrl: email,
  },
  {
    text: "Se algo parecer suspeito, avise-nos imediatamente",
    bgColorClass: "card-bg-purple",
    imageUrl: protec,
  },
];

function Card({ card }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 1.4", "end 0.5"],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["50%", "0%", "0%", "50%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      className={`fraud-card ${card.bgColorClass}`}
      style={{ x: translateX, opacity }}
    >
      <div className="fraud-card-text">{card.text}</div>
      <img src={card.imageUrl} className="fraud-card-image" alt="" />
    </motion.div>
  );
}

function FraudPrevention() {
  return (
    <section className="fraud-section">
      <div className="container fraud-container">
        <div className="fraud-content-sticky">
          <h2 className="fraud-title">Fique Um Passo à Frente</h2>
          <div className="fraud-text">
            <p>
              Aprenda a identificar fraudes e a proteger a sua conta no nosso
              Guia de Prevenção de Fraudes.
            </p>
          </div>
          <a href="#" className="btn btn-purple fraud-btn">
            Aprenda a Manter-se Seguro
          </a>
        </div>

        <div className="fraud-cards-wrapper">
          {fraudCardsData.map((card, i) => (
            <Card card={card} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FraudPrevention;
