import React from "react";
import "./style-contact.css";   // CSS spécifique à la page (fond bleu dans le wrapper)

function Contact() {
  return (
    <>
      {/* Ancre principale pour la route /C5 */}
      <span id="C5" />

      {/* Wrapper qui porte l'image de fond bleue (en CSS) */}
      <div className="contact-page-bg">
        {/* Carte blanche contenant TOUT: titre + formulaire + coordonnées */}
        <section className="container contact-card-wrapper">
          <div className="contact-card shadow-sm">
            {/* En-tête DANS la carte (comme la maquette) */}
            <header className="text-center mb-4">
              <h1 className="display-6 fw-bold mb-2">ME CONTACTER</h1>
              <p className="text-muted mb-0">
                Pour me contacter en vue d’un entretien ou d’une future collaboration,
                merci de remplir le formulaire de contact.
              </p>
              <span className="contact-underline d-inline-block mt-3" />
            </header>

            <div className="row g-4">
              {/* Formulaire */}
              <div className="col-lg-6">
                <h2 className="h5 fw-bold mb-3">Formulaire de contact</h2>
                <form className="needs-validation" noValidate>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Votre nom" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Votre adresse email" required />
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Sujet" required />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="4" placeholder="Votre message" required />
                  </div>
                  <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
              </div>

              {/* Coordonnées + Map */}
              <div className="col-lg-6">
                <h2 className="h5 fw-bold mb-3">Mes coordonnées</h2>
                <ul className="list-unstyled small text-muted mb-3">
                  <li className="mb-1">
                    <i className="fa-solid fa-location-dot me-2"></i>
                    40 Rue Laure Diebold, 69009 Lyon, France
                  </li>
                  <li>
                    <i className="fa-solid fa-phone me-2"></i>
                    06 20 30 40 50
                  </li>
                </ul>
                <div className="ratio ratio-4x3 rounded overflow-hidden">
                  <iframe
                    title="Localisation John Doe"
                    src="https://www.google.com/maps?q=40%20Rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
