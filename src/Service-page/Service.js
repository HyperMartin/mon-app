//service.js

import "./style-service.css";       // CSS spécifique à la page Services
import banner from "./banner.jpg";  // Image de la bannière (même dossier)

function Service() {
  return (
    <>
      {/* Ancre de section : le Header peut lier vers #Services */}
      <span id="S2" />

      {/* Bandeau bleu en haut (image en background) */}
      <div
        className="service-banner"
        style={{ backgroundImage: `url(${banner})` }}
        aria-hidden="true"
      />

      {/* En-tête (titre + sous-titre + petite barre bleue) */}
      <header className="container text-center my-5">
        <h1 className="display-6 fw-bold mb-2">MON OFFRE DE SERVICES</h1>
        <p className="text-muted mb-3">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
        <span className="service-underline d-inline-block" />
      </header>

      {/* 3 cartes de services */}
      <section className="container pb-5">
        <div className="row g-4">
          {/* UX Design */}
          <article className="col-md-6 col-lg-4">
            <div className="service-card h-100">
              <div className="service-icon-wrap mb-3">
                <i className="fa-solid fa-display service-icon" aria-hidden="true"></i>
              </div>
              <h3 className="h6 fw-bold text-uppercase mb-2">UX DESIGN</h3>
              <p className="mb-0 text-muted small">
                L’UX Design est une méthode de conception centrée sur l’utilisateur.
                Son but est d’offrir une expérience de navigation optimale à l’internaute.
              </p>
            </div>
          </article>

          {/* Développement Web */}
          <article className="col-md-6 col-lg-4">
            <div className="service-card h-100">
              <div className="service-icon-wrap mb-3">
                <i className="fa-solid fa-code service-icon" aria-hidden="true"></i>
              </div>
              <h3 className="h6 fw-bold text-uppercase mb-2">DÉVELOPPEMENT WEB</h3>
              <p className="mb-0 text-muted small">
                Le développement de sites web repose sur l’utilisation des langages
                <strong> HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>PHP</strong>.
              </p>
            </div>
          </article>

          {/* Référencement */}
          <article className="col-md-6 col-lg-4">
            <div className="service-card h-100">
              <div className="service-icon-wrap mb-3">
                <i className="fa-solid fa-magnifying-glass-chart service-icon" aria-hidden="true"></i>
              </div>
              <h3 className="h6 fw-bold text-uppercase mb-2">RÉFÉRENCEMENT</h3>
              <p className="mb-0 text-muted small">
                Le référencement naturel d’un site, aussi appelé <strong>SEO</strong>,
                consiste à mettre des techniques en œuvre pour <em>améliorer sa position</em>
                dans les résultats des moteurs de recherche.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Service;
