import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import earth from "../../assets/terra.png";
import taxes from "../../assets/taxes.png";
import crypt from "../../assets/crypt.jpg";
import "./Benefits.css";

const benefitsData = [
  {
    text: "Taxas baixas com preços transparentes",
    bgColorClass: "card-bg-dark",
    imageUrl: taxes,
  },
  {
    text: "Suporte Multilíngue\u2028ao Vivo, incluindo Ucraniano",
    bgColorClass: "card-bg-navy",
    imageUrl: earth,
  },
  {
    text: "Totalmente seguro e em conformidade com GDPR/AML",
    bgColorClass: "card-bg-accent",
    imageUrl: crypt,
  },
];
function Card({ benefit, i }) {
  const cardRef = useRef(null);
  const { scrollY } = useScroll();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const start = isMobile ? 4200 + i * 150 : 2400 + i * 350;
  const end = start + (isMobile ? 250 : 300);

  const translateX = useTransform(scrollY, [start, end], ["50%", "0%"]);
  const opacity = useTransform(scrollY, [start, end], [0, 1]);

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
          <h2 className="benefits-title h2">Por que NovaEffectus?</h2>
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
