import React from "react";
import "./ActionBanner.css";

function ActionBanner() {
  return (
    <div className="action-banner">
      <div className="container action-banner-container">
        <h2 className="action-banner-title">Simplify Your Finances Today</h2>

        <div className="action-banner-button-wrapper">
          {}
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <a href="#" className="btn btn-white btn-large">
            Get the app
          </a>
        </div>
      </div>
    </div>
  );
}

export default ActionBanner;
