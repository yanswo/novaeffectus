import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./SupportOptions.css";

const supportCardsData = [
  {
    title: "Suporte por Email",
    description: "Tem uma pergunta não urgente? Escreva para",
    contact: "internationalsupport@novaeffectus.com",
    contactType: "email",
  },
];

function AnimatedCard({ card }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.5"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={ref} className="support-card" style={{ y, opacity }}>
      <div className={`icon-background ${card.contactType}`}></div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <a
        href={
          card.contactType === "email"
            ? `mailto:${card.contact}`
            : `tel:${card.contact.replace(/\s/g, "")}`
        }
      >
        {card.contact}
      </a>
    </motion.div>
  );
}

function SupportOptions() {
  return (
    <section className="support-options-section">
      <div className="container">
        <div className="support-options-header">
          <h2 className="support-options-title">
            Fale Conosco a Qualquer Hora
          </h2>
          <p className="support-options-subtitle">
            Envie-nos um email — geralmente respondemos em até 1 dia útil
          </p>
        </div>
        <div className="support-cards-wrapper">
          {supportCardsData.map((card, index) => (
            <AnimatedCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportOptions;
