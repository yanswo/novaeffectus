import React from "react";
import "./Hero.css";

const backgroundImageUrl =
  "https://images.unsplash.com/photo-1554189097-c48c982a9de1?q=80&w=2070&auto=format&fit=crop";

function Hero() {
  return (
    <section className="hero-section">
      {}
      <div className="hero-background">
        <img src={backgroundImageUrl} alt="Paisagem abstrata roxa" />
      </div>

      {}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1>
            Financial Services Designed <br /> for You
          </h1>
          <p>
            Open accounts, get virtual cards, send money, and pay — all in one
            app, from anywhere, in just a few taps
          </p>
          {}
          <a href="#" className="btn btn-white btn-large">
            Get the app
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
