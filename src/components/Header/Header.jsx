import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header({ theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`site-header ${theme} ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container header-wrapper">
        <NavLink to="/" className="logo">
          NovaEffectus
        </NavLink>

        <div className="header-actions">
          <nav className="main-nav">
            <ul>
              <li>
                <a
                  href="/#servicos"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </a>
              </li>
              <li>
                <NavLink
                  to="/sobre"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/suporte"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Suporte
                </NavLink>
              </li>
            </ul>
          </nav>

          <button className="lang-switcher">PT</button>
          <a href="#" className="btn btn-white">
            Baixe o App
          </a>

          <button
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
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
