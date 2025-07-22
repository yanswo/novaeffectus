import React from "react";
import "./Footer.css";

const footerMenu = {
  "Produtos e Serviços": [{ label: "Pessoal", url: "#" }],
  Empresa: [{ label: "Sobre Nós", url: "#" }],
  Ajuda: [
    { label: "Fale Conosco", url: "#" },
    { label: "FAQ", url: "#" },
  ],
  Legal: [
    { label: "Política de Privacidade", url: "#" },
    { label: "Termos e Condições", url: "#" },
  ],
};

function Footer() {
  return (
    <footer className="site-footer animate-on-load fade-in">
      <div className="container footer-grid">
        <div className="footer-column footer-brand">
          <a href="/" className="footer-logo">
            NovaPay
          </a>
          <p>Serviços financeiros para o seu dia a dia na Europa.</p>
        </div>
        {Object.entries(footerMenu).map(([title, links]) => (
          <div className="footer-column" key={title}>
            <h3>{title}</h3>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2025 NovaPay EU UAB. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
