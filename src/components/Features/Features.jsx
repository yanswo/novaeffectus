import React from "react";
import "./Features.css";

const featuresData = [
  {
    title: "Quick Activation",
    description:
      "Get your virtual Mastercard in the app — ready to use right away",
    imageUrl: "https://placehold.co/580x520/a57df1/fff?text=Card",
  },
  {
    title: "Full Control",
    description:
      "Manage your card anytime — block, unblock, and tweak settings right in the app",
    imageUrl: "https://placehold.co/580x520/690dd3/fff?text=Phone+1",
  },
  {
    title: "Secure Payments",
    description:
      "Pay online and in stores across Europe with Mastercard — safely and easily",
    imageUrl: "https://placehold.co/580x520/9163f5/fff?text=Phone+2",
  },
];

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        {}
        <div className="features-content-box">
          {}
          {featuresData.map((feature, index) => (
            <div className="feature-block" key={index}>
              <div className="feature-image">
                <img src={feature.imageUrl} alt={feature.title} />
              </div>
              <div className="feature-text">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
