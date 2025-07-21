import React from "react";
import "./Benefits.css";

const benefitsData = [
  {
    text: "Low fees with transparent pricing",
    bgColorClass: "bg-violet",
  },
  {
    text: "Multilingual Live support, including Ukrainian",
    bgColorClass: "bg-violet-light",
  },
  {
    text: "Fully secure and GDPR/AML compliant",
    bgColorClass: "bg-sky-blue",
  },
];

function Benefits() {
  return (
    <section className="benefits-section">
      <div className="container benefits-container">
        {}
        <div className="benefits-content-sticky">
          <h2>Why NovaPay?</h2>
          <p>
            Secure virtual cards linked to your EUR or PLN accounts. Perfect for
            online shopping and contactless payments.
          </p>
        </div>

        {}
        <div className="benefits-cards-wrapper">
          {benefitsData.map((benefit, index) => (
            <div className={`benefit-card ${benefit.bgColorClass}`} key={index}>
              <div className="benefit-card-text">{benefit.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
