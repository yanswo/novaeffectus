import React from "react";
import "./MainBanner.css";

function MainBanner() {
  return (
    <section className="main-banner-section">
      <div className="container">
        <div className="main-banner-wrapper">
          {}
          <div className="main-banner-media">
            {}
            <img
              src="https://placehold.co/460x940/ffffff/290063?text=App+Video"
              alt="App demonstration"
            />
          </div>

          {}
          <div className="main-banner-content">
            <h2>Easy Transfers Across Europe</h2>
            <p>
              Send money fast and worry-free. Whether it’s EUR or PLN, our
              transfers support both local and European payments — simple,
              secure, and ready when you are.
            </p>
            {}
            <a href="#" className="btn btn-white btn-large">
              Get the app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
