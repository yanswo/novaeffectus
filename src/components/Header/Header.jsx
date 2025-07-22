import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header({ theme }) {
  return (
    <header className={`site-header ${theme}`}>
      <div className="container header-wrapper">
        <NavLink to="/" className="logo">
          NovaPay
        </NavLink>
        <nav className="main-nav">
          <ul>
            <li>
              {}
              <a href="/#servicos" className="nav-link">
                Serviços
              </a>
            </li>
            <li>
              <NavLink to="/sobre" className="nav-link">
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/suporte" className="nav-link">
                Suporte
              </NavLink>
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
