import React from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton({ isVisible, isOverFooter }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonClasses = `scroll-to-top-button ${isVisible ? "visible" : ""} ${
    isOverFooter ? "theme-light" : ""
  }`;

  return (
    <button
      className={buttonClasses}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
}

export default ScrollToTopButton;
