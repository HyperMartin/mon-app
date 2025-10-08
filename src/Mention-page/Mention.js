  // src/Mention-page/Mention.js
import React from "react";
import "./style-mention.css";

function Mention() {
  // Titre + noindex + remonter en haut
  React.useEffect(() => {
    document.title = "Mentions légales – John Doe";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    window.scrollTo(0, 0);
    return () => document.head.removeChild(meta);
  }, []);

  return (
    <>
      {/* Ancre utilisée par le header/footer */}
      <span id="J0" />

      {/* Titre */}
      <header className="container text-center my-5">
        <h1 className="display-6 fw-bold mb-2">MENTIONS LÉGALES</h1>
        <span className="mention-underline d-inline-block" />
      </header>

      {/* Accordéon Bootstrap */}
      <section className="container pb-5">
        <div className="accordion shadow-sm" id="mentionsAccordion">
          {/* Éditeur du site */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEditor">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEditor"
                aria-expanded="true"
                aria-controls="collapseEditor"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseEditor"
              className="accordion-collapse collapse show"
              aria-labelledby="headingEditor"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <h3 className="h5 fw-bold mb-3">John Doe</h3>
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fa-solid fa-location-dot me-2"></i>
                    40 Rue Laure Diebold<br />69009 Lyon, France
                  </li>
                  <li className="mt-2">
                    <i className="fa-solid fa-phone me-2"></i>
                    06 20 30 40 50
                  </li>
                  <li className="mt-2">
                    <i className="fa-solid fa-envelope me-2"></i>
                    <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hébergeur : GitHub */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingHost">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseHost"
                aria-expanded="false"
                aria-controls="collapseHost"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseHost"
              className="accordion-collapse collapse"
              aria-labelledby="headingHost"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <h3 className="h5 fw-bold mb-2">GitHub</h3>
                <address className="mb-2">
                  GitHub, Inc.<br />
                  88 Colin P Kelly Jr St<br />
                  San Francisco, CA 94107, USA
                </address>
                <a
                  href="https://pages.github.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  pages.github.com
                </a>
              </div>
            </div>
          </div>

          {/* Crédits */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingCredits">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCredits"
                aria-expanded="false"
                aria-controls="collapseCredits"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseCredits"
              className="accordion-collapse collapse"
              aria-labelledby="headingCredits"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <h3 className="h5 fw-bold mb-3">Crédits</h3>
                <p className="mb-2">
                  Site développé par John Doe, étudiant du CEF.
                </p>
                <p className="mb-0">
                  Les images libres de droit sont issues du site{" "}
                  <a
                    href="https://pixabay.com"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    Pixabay
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mention;
