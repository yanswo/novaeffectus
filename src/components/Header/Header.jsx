import React from "react";
import "./Header.css";

function Header({ theme }) {
  return (
    <header className={`site-header ${theme}`}>
      <div className="container header-wrapper">
        <a href="/" className="logo">
          NovaPay
        </a>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#" className="nav-link">
                Serviços
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Suporte
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="lang-switcher">PT</button>
          <a href="#" className="btn btn-white">
            Baixe o App
          </a>
          <button className="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
