import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Benefits.css";

const benefitsData = [
  {
    text: "Taxas baixas com preços transparentes",
    bgColorClass: "card-bg-dark",
    imageUrl:
      "https://cdn3d.iconscout.com/3d/premium/thumb/crypto-coin-5691538-4741047.png",
  },
  {
    text: "Suporte Multilíngue\u2028ao Vivo, incluindo Ucraniano",
    bgColorClass: "card-bg-navy",
    imageUrl:
      "https://cdn3d.iconscout.com/3d/premium/thumb/global-network-5275624-4422938.png",
  },
  {
    text: "Totalmente seguro e em conformidade com GDPR/AML",
    bgColorClass: "card-bg-accent",
    imageUrl:
      "https://cdn3d.iconscout.com/3d/premium/thumb/document-security-5522079-4623631.png",
  },
];

function Card({ benefit, i }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
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
      className={`benefit-card ${benefit.bgColorClass}`}
      style={{ x: translateX, opacity }}
    >
      <div className="benefit-card-text">{benefit.text}</div>
      <img src={benefit.imageUrl} className="benefit-card-image" alt="" />
    </motion.div>
  );
}

function Benefits() {
  return (
    <section className="benefits-section">
      <div className="container benefits-container">
        <div className="benefits-content-sticky">
          <h2 className="benefits-title h2">Por que NovaPay?</h2>
          <div className="benefits-text">
            <p>
              Cartões virtuais seguros vinculados às suas contas em EUR ou PLN.
              Perfeito para compras online e pagamentos por aproximação.
            </p>
          </div>
        </div>

        <div className="benefits-cards-wrapper">
          {benefitsData.map((benefit, i) => (
            <Card benefit={benefit} i={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
