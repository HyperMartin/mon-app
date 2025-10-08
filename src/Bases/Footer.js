 // Footer.js

import { Link } from "react-router-dom";
import "./footer.css";

// 🖼️ Importation des icônes sociales (méthode React officielle)
import gitIcon from "../Images/Git.PNG";
import twitterIcon from "../Images/twitter.PNG";
import linkIcon from "../Images/link.PNG";

function Footer() {
  const year = new Date().getFullYear();

  // --- Gestion du bouton "Retour en haut" ---
  const handleScroll = () => {
    const button = document.querySelector(".btn-top");
    if (window.scrollY > 200) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  };

  // Active le listener une seule fois
  window.addEventListener("scroll", handleScroll);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      {/* Partie claire : 4 colonnes */}
      <div className="footer-top py-5">
        <div className="container">
          <div className="row g-4">

            {/* --- Colonne 1 : identité + icônes --- */}
            <div className="col-12 col-lg-3">
              <h6 className="footer-title mb-3">John Doe</h6>
              <address className="mb-3 footer-address">
                40 Rue Laure Diebold<br />
                69009 Lyon, France<br />
                Téléphone : 06 20 30 40 50
              </address>

              {/* Icônes sociales */}
              <div className="d-flex gap-3">
                <a
                  href="https://github.com/github-john-doe"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Github"
                >
                  <img src={gitIcon} alt="Github" className="social-icon" />
                </a>

                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Twitter"
                >
                  <img src={twitterIcon} alt="Twitter" className="social-icon" />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="LinkedIn"
                >
                  <img src={linkIcon} alt="LinkedIn" className="social-icon" />
                </a>
              </div>
            </div>

            {/* --- Colonne 2 : Liens utiles --- */}
            <div className="col-12 col-lg-3">
              <h6 className="footer-title mb-3">Liens utiles</h6>
              <ul className="list-unstyled footer-links">
                <li><Link to="/A1" className="footer-link">Accueil</Link></li>
                <li><a href="/A1#Apropos" className="footer-link">À propos</a></li>
                <li><Link to="/S2" className="footer-link">Services</Link></li>
                <li><Link to="/C5" className="footer-link">Me contacter</Link></li>
                <li><Link to="/J0" className="footer-link">Mentions légales</Link></li>
              </ul>
            </div>

            {/* --- Colonne 3 : Réalisations --- */}
            <div className="col-12 col-lg-3">
              <h6 className="footer-title mb-3">Mes dernières réalisations</h6>
              <ul className="list-unstyled footer-links">
                <li><Link to="/R3" className="footer-link">Fresh food</Link></li>
                <li><Link to="/R3" className="footer-link">Restaurant Akira</Link></li>
                <li><Link to="/R3" className="footer-link">Espace bien-être</Link></li>
              </ul>
            </div>

            {/* --- Colonne 4 : Articles --- */}
            <div className="col-12 col-lg-3">
              <h6 className="footer-title mb-3">Mes derniers articles</h6>
              <ul className="list-unstyled footer-links">
                <li><Link to="/B4" className="footer-link">Coder son site en HTML/CSS</Link></li>
                <li><Link to="/B4" className="footer-link">Vendre ses produits sur le web</Link></li>
                <li><Link to="/B4" className="footer-link">Se positionner sur Google</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="footer-bottom text-center text-white py-3">
        © Designed by John Doe {year}
      </div>

      {/* Bouton retour en haut */}
      <button className="btn-top" onClick={scrollToTop} aria-label="Retour en haut">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  );
}

export default Footer;
