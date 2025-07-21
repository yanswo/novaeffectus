import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        {}
        <a href="/" className="logo">
          NovaPay
        </a>

        {}
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#" className="nav-link active">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Support
              </a>
            </li>
          </ul>
        </nav>

        {}
        <div className="header-actions">
          <button className="lang-switcher">EN</button>
          <a href="#" className="btn btn-white">
            Get the app
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
