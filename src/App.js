// App.js

// 🧭 Importation des outils de routage
// HashRouter : indispensable pour GitHub Pages (gère les routes avec #, évite les erreurs 404)
// Routes / Route : pour définir les pages
// Navigate : permet de rediriger vers une autre route
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// 🌀 Composant qui force le scroll en haut à chaque changement de page
import ScrollToTop from "./ScrollToTop";

// 🧩 Importation des composants de structure du site
import Header from "./Bases/Header.js";  // en-tête
import Footer from "./Bases/Footer.js";  // pied de page

// 📄 Importation des pages principales
import Acceuil from "./Acceuil-page/Acceuil.js";  // page d'accueil
import Realisation from "./Realisations-page/Realisation.js"; // page réalisations
import Service from "./Service-page/Service.js";  // page services
import Contact from "./Contact-page/Contact.js";  // page contact
import Blog from "./Blog-page/Blog.js";           // page blog / articles
import Mention from "./Mention-page/Mention.js";  // mentions légales

// ⚙️ Composant principal de l'application React
function App() {
  return (
    // 🔁 HashRouter : nécessaire pour le bon fonctionnement sur GitHub Pages
    <Router>
      {/* Force le retour en haut lors d'un changement de page */}
      <ScrollToTop />

      {/* Barre de navigation (toujours visible en haut) */}
      <Header />

      {/* Gestion des routes (navigation entre les pages) */}
      <Routes>
        {/* 🏠 Redirection automatique vers /A1 (page d'accueil) */}
        <Route path="/" element={<Navigate to="/A1" replace />} />

        {/* 🔗 Définition des routes principales */}
        <Route path="/A1" element={<Acceuil />} />         {/* Accueil */}
        <Route path="/R3" element={<Realisation />} />     {/* Réalisations */}
        <Route path="/S2" element={<Service />} />         {/* Services */}
        <Route path="/C5" element={<Contact />} />         {/* Contact */}
        <Route path="/B4" element={<Blog />} />            {/* Blog */}
        <Route path="/J0" element={<Mention />} />         {/* Mentions légales */}

        {/* 🧱 Route de secours : redirige vers l'accueil si la page n'existe pas */}
        <Route path="*" element={<Navigate to="/A1" replace />} />
      </Routes>

      {/* Pied de page (toujours visible en bas) */}
      <Footer />
    </Router>
  );
}

// 🚀 Exportation du composant pour utilisation dans index.js
export default App;
