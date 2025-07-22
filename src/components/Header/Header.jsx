import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
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
          <a href="#" className="btn btn-primary">
            Baixe o App
          </a>
          <button className="hamburger-menu">
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
