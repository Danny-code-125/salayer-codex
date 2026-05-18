// Novedades.jsx — página completa de novedades + carrusel
import NovedadesSection from "../components/NovedadesSection";
import BottomCarousel from "../components/BottomCarousel";
import "./Novedades.css";

const Novedades = () => (
  <div className="novedades-page page-container fade-in">
    <div className="novedades-page__banner">
      <h1 className="novedades-page__title">NOVEDADES</h1>
      <p className="novedades-page__sub">Últimas noticias del universo Demon Slayer</p>
    </div>
    {/* ⚠️ IMAGEN: charImg="/assets/char-nezuko-full.png" */}
    <NovedadesSection />
    <BottomCarousel />
  </div>
);

export default Novedades;
