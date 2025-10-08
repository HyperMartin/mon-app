  // Fichier des réalisations
import React from "react";
import { Link } from "react-router-dom";          // pour rester cohérent avec le routeur
import "./style-reali.css";                       // CSS spécifique à cette page

// Images (même dossier que ce fichier)
import banner from "./banner.jpg";
import imgFresh from "./fresh-food.jpg";
import imgAkira from "./restaurant-japonais.jpg";
import imgZen from "./espace-bien-etre.jpg";

function Realisations() {
  return (
    <>
      {/* --- BANNIÈRE BLEUE EN HAUT DE PAGE --- */}
      <div
        className="reali-banner"
        style={{ backgroundImage: `url(${banner})` }}
        aria-hidden="true"
      />

      {/* Lien d'ancrage principal pour la page Réalisations (route /R3) */}
      <span id="R3"/> 

      {/* --- EN-TÊTE DE PAGE --- */}
      <header className="container text-center my-5">
        <h1 className="display-5 fw-bold mb-2">PORTFOLIO</h1>
        <p className="text-muted mb-3">Voici quelques-unes de mes réalisations.</p>
        <span className="reali-underline d-inline-block" />
      </header>

      {/* --- LISTE DES CARTES --- */}
      <section className="container pb-5">
        <div className="row g-4">

          {/* Fresh food */}
          <article className="col-md-6 col-lg-4" id="fresh-food">
            <div className="card h-100 shadow-sm border-0">
              <img src={imgFresh} alt="Fresh food" className="card-img-top" />
              <div className="card-body">
                <h3 className="h5 card-title">Fresh food</h3>
                <p className="card-text mb-3">
                  Réalisation d’un site avec commande en ligne.
                </p>
                {/* Lien interne propre à la même page (route /R3 + hash) */}
                <Link to="/R3#fresh-food" className="btn btn-outline-primary btn-sm">
                  Voir
                </Link>
              </div>
              <div className="card-footer bg-transparent small text-muted">
                Site réalisé avec PHP et MySQL
              </div>
            </div>
          </article>

          {/* Restaurant Akira */}
          <article className="col-md-6 col-lg-4" id="restaurant-akira">
            <div className="card h-100 shadow-sm border-0">
              <img src={imgAkira} alt="Restaurant Akira" className="card-img-top" />
              <div className="card-body">
                <h3 className="h5 card-title">Restaurant Akira</h3>
                <p className="card-text mb-3">
                  Réalisation d’un site vitrine.
                </p>
                <Link to="/R3#restaurant-akira" className="btn btn-outline-primary btn-sm">
                  Voir
                </Link>
              </div>
              <div className="card-footer bg-transparent small text-muted">
                Site réalisé avec WordPress
              </div>
            </div>
          </article>

          {/* Espace bien-être */}
          <article className="col-md-6 col-lg-4" id="espace-bien-etre">
            <div className="card h-100 shadow-sm border-0">
              <img src={imgZen} alt="Espace bien-être" className="card-img-top" />
              <div className="card-body">
                <h3 className="h5 card-title">Espace bien-être</h3>
                <p className="card-text mb-3">
                  Réalisation d’un site vitrine pour un praticien de bien-être.
                </p>
                <Link to="/R3#espace-bien-etre" className="btn btn-outline-primary btn-sm">
                  Voir
                </Link>
              </div>
              <div className="card-footer bg-transparent small text-muted">
                Site réalisé en HTML/CSS
              </div>
            </div>
          </article>

        </div>
      </section>
    </>
  );
}

export default Realisations;
