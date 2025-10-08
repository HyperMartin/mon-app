 //BLOG.JS
 import "./style-blog.css";       // CSS de cette page
import banner from "./banner.jpg";

// Images des articles (même dossier que ce fichier)
// Ordre identique à la maquette :
import img1 from "./coder.jpg";
import img2 from "./croissance.jpg";
import img3 from "./google.jpg";
import img4 from "./screens.jpg";
import img5 from "./seo.jpg";
import img6 from "./technos.png";

function Blog() {
  return (
    <>
      {/* Ancre pour le lien #Blog du header */}
      <span id="B4" />

      {/* Bannière bleue */}
      <div
        className="blog-banner"
        style={{ backgroundImage: `url(${banner})` }}
        aria-hidden="true"
      />

      {/* Titre + sous-titre + barre bleue */}
      <header className="container text-center my-5">
        <h1 className="display-6 fw-bold mb-2">BLOG</h1>
        <p className="text-muted mb-3">
          Retrouvez ici quelques articles sur le développement web.
        </p>
        <span className="blog-underline d-inline-block" />
      </header>

      {/* Grille des 6 articles */}
      <section className="container pb-5">
        <div className="row g-4">

          {/* 1 */}
          <article className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={img1} alt="Coder son site en HTML/CSS" className="card-img-top blog-thumb" />
              <div className="card-body">
                <h3 className="h5 card-title">Coder son site en HTML/CSS</h3>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#post-1" className="btn btn-primary btn-sm">Lire la suite</a>
              </div>
              <div className="card-footer bg-transparent small text-muted">
                Publié le 22 août 2022
              </div>
            </div>
          </article>

          {/* 2 */}
          <article className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={img2} alt="Vendre ses produits sur le web" className="card-img-top blog-thumb" />
              <div className="card-body">
                <h3 className="h5 card-title">Vendre ses produits sur le web</h3>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#post-2" className="btn btn-primary btn-sm">Lire la suite</a>
              </div>
              <div className="card-footer bg-transparent small text-muted">
                Publié le 20 août 2022
              </div>
            </div>
          </article>

          {/* 3 */}
          <article className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={img3} alt="Se positionner sur Google" className="card-img-top blog-thumb" />
              <div className="card-body">
                <h3 className="h5 card-title">Se positionner sur Google</h3>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#post-3" className="btn btn-primary btn-sm">Lire la suite</a>
              </div>
              <div className="card-footer bg-transparent small text-muted">
                Publié le 1 août 2022
              </div>
            </div>
          </article>

          {/* 4 */}
          <article className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={img4} alt="Coder en responsive design" className="card-img-top blog-thumb" />
              <div className="card-body">
                <h3 className="h5 card-title">Coder en responsive design</h3>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#post-4" className="btn btn-primary btn-sm">Lire la suite</a>
              </div>
              <div className="card-footer bg-transparent small text-muted">
                Publié le 31 juillet 2022
              </div>
            </div>
          </article>

          {/* 5 */}
          <article className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={img5} alt="Techniques de référencement" className="card-img-top blog-thumb" />
              <div className="card-body">
                <h3 className="h5 card-title">Techniques de référencement</h3>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#post-5" className="btn btn-primary btn-sm">Lire la suite</a>
              </div>
              <div className="card-footer bg-transparent small text-muted">
                Publié le 30 juillet 2022
              </div>
            </div>
          </article>

          {/* 6 */}
          <article className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={img6} alt="Apprendre à coder" className="card-img-top blog-thumb" />
              <div className="card-body">
                <h3 className="h5 card-title">Apprendre à coder</h3>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#post-6" className="btn btn-primary btn-sm">Lire la suite</a>
              </div>
              <div className="card-footer bg-transparent small text-muted">
                Publié le 12 juillet 2022
              </div>
            </div>
          </article>

        </div>
      </section>
    </>
  );
}

export default Blog;
