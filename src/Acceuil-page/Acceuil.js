  import "./style-accueil.css";  // styles spécifiques de la page
import fond from "./fond.jpg";  // image de fond  (même dossier)
import capture from "./Capture.PNG"; // image des compétences (dans la carte)

function Acceuil() {
  return (
    <>
      {/* Ancre de page : lien /A1 ou #A1 depuis le header/footer */}
      <span id="A1" />

      {/* ============ HERO ============ 
          - Fond plein écran avec "fond.jpg"
          - Overlay noir 0.3 au-dessus de l’image
          - h1 + h2 + bouton "En savoir plus" qui envoie sur la section À propos */}
      <section
        className="hero-accueil d-flex align-items-center"
        style={{ backgroundImage: `url(${fond})` }}
        aria-label="Section d'introduction"
      >
        {/* voile noir 0.3 au-dessus de l’image */}
        <div className="hero-overlay" aria-hidden="true" />

        <div className="container position-relative text-center text-white">
          <h1 className="display-4 fw-bold mb-3">
            Bonjour, je suis John Doe
          </h1>
          <h2 className="h3 fw-semibold mb-4">
            Développeur web full stack
          </h2>

          <a href="#Apropos" className="btn btn-primary btn-lg">
            En savoir plus
          </a>
        </div>
      </section>

      {/* ============ A PROPOS ============ 
          - Carte texte
          - Carte image + progress bars Bootstrap */}
      <section id="Apropos" className="section-apropos py-5">
        <div className="container">
          <div className="row g-4">
            {/* Colonne texte */}
            <div className="col-lg-6">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h3 className="h4 fw-bold mb-3">
                    À propos
                    <span className="barre-title ms-3" />
                  </h3>

                  <p className="mb-3">
                    Passionné par l’informatique et les nouvelles technologies, j’ai suivi une
                    formation d’<strong>intégrateur-développeur web</strong> au CEF. Au cours de
                    cette formation, j’ai pu acquérir des bases solides pour travailler dans le
                    domaine du <strong>développement web</strong>.
                  </p>
                  <p className="mb-3">
                    Basé à Lyon, je suis en recherche d’une alternance au sein d’une agence digitale
                    pour consolider ma formation de <strong>développeur web full stack</strong>.
                  </p>
                  <p className="mb-0">
                    J’accorde une attention particulière à la qualité du code que j’écris et je
                    respecte les bonnes pratiques du web.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne image + compétences */}
            <div className="col-lg-6">
              <div className="card shadow-sm border-0 overflow-hidden">
                {/* Image de haut de carte (ne pas forcer la hauteur pour éviter la coupe) */}
                <img
                  src={capture}
                  className="w-100"
                  alt="Illustration de travail au bureau"
                />

                <div className="card-body p-4">
                  <h4 className="h5 fw-bold mb-4">Mes compétences</h4>

                  {/* HTML5 */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between small">
                      <span>HTML5</span><span>90%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-label="HTML5 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-danger" style={{ width: "90%" }} />
                    </div>
                  </div>

                  {/* CSS3 */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between small">
                      <span>CSS3</span><span>80%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-label="CSS3 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: "80%" }} />
                    </div>
                  </div>

                  {/* JavaScript */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between small">
                      <span>JavaScript</span><span>70%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-label="JavaScript 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-warning" style={{ width: "70%" }} />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between small">
                      <span>PHP</span><span>60%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-label="PHP 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-success" style={{ width: "60%" }} />
                    </div>
                  </div>

                  {/* React */}
                  <div>
                    <div className="d-flex justify-content-between small">
                      <span>React</span><span>50%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-label="React 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-primary" style={{ width: "50%" }} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* /col */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Acceuil;
