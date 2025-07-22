import React from "react";
import "./Footer.css";

const footerMenu = {
  "Produtos e Serviços": [{ label: "Pessoal", url: "#" }],
  Empresa: [{ label: "Sobre Nós", url: "#" }],
  Ajuda: [
    { label: "Fale Conosco", url: "#" },
    { label: "FAQ", url: "#", soon: true },
  ],
  Legal: [
    { label: "Política de Privacidade", url: "#" },
    { label: "Política de Reclamações", url: "#" },
    { label: "Termos e Condições da Quicko", url: "#" },
    { label: "Tarifas", url: "#" },
  ],
};

function Footer() {
  return (
    <footer className="site-footer">
      <div className="action-banner-section">
        <div className="container action-banner-container">
          <h2 className="action-banner-title">
            Simplifique Suas Finanças Hoje
          </h2>
          <div className="action-banner-button-wrapper">
            <div className="action-banner-btn-wave"></div>
            <div className="action-banner-btn-wave"></div>
            <div className="action-banner-btn-wave"></div>
            <div className="action-banner-btn-wave"></div>

            {}
            <a
              href="mailto:teste@exemplo.com"
              className="btn btn-white action-banner-btn"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-wrapper">
        <div className="footer-head">
          <div className="footer-menu">
            {Object.entries(footerMenu).map(([title, links]) => (
              <div className="menu-group" key={title}>
                <h3 className="menu-group-name">{title}</h3>
                <div className="menu-group-content">
                  <ul>
                    {links.map((link) => (
                      <li key={link.label}>
                        <a href={link.url} className="menu-group-link">
                          <span>{link.label}</span>
                          {link.soon && (
                            <span className="soon-label">Em breve</span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="copyright">
          <p>© 2025 NovaPay EU UAB. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
