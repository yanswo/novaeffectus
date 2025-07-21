import React from "react";
import ActionBanner from "../ActionBanner/ActionBanner";
import "./Footer.css";

const menuData = {
  Products: [{ label: "Personal", url: "#" }],
  Company: [{ label: "About Us", url: "#" }],
  Help: [
    { label: "Contact Us", url: "#" },
    { label: "FAQ", url: "#", soon: true },
  ],
  Legal: [
    { label: "Privacy Policy", url: "#" },
    { label: "Complaint Handling Policy", url: "#" },
    { label: "Tariffs", url: "#" },
  ],
};

function Footer() {
  return (
    <footer className="site-footer">
      {}
      <ActionBanner />

      {}
      <div className="container footer-main-content">
        <div className="footer-menu-grid">
          {Object.entries(menuData).map(([title, links]) => (
            <div className="footer-menu-group" key={title}>
              <h3>{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.url}>
                      {link.label}
                      {link.soon && <span className="soon-label">Soon</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {}
        <div className="footer-copyright">
          <p>© 2025 NovaPay EU UAB. All rights reserved.</p>
          <p>
            All financial services are subject to terms and conditions.
            Financial services are provided through our trusted partner Quicko.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
