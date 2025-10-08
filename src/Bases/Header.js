 
// Header.js
import { NavLink, Link } from "react-router-dom";
import "./header.css";

function Header() {
  // utilitaire pour appliquer 'active' quand la route correspond
  const cls = ({ isActive }) => "nav-link" + (isActive ? " active" : "");

  return (
    <header className="site-header sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* LOGO → route J0 (Mentions légales) */}
          <Link to="/J0" className="navbar-brand fw-bold">
            JOHN DOE
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Basculer la navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase fw-semibold">
              <li className="nav-item">
                <NavLink to="/A1" end className={cls}>Accueil</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/S2" className={cls}>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/R3" className={cls}>Réalisations</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/B4" className={cls}>Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/C5" className={cls}>Me contacter</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
