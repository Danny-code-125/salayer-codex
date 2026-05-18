import { Link } from "react-router-dom";
import NovedadesSection from "../components/NovedadesSection";
import BottomCarousel from "../components/BottomCarousel";
import "./Home.css";

const Home = () => {
  return (
    <div className="home page-container fade-in">

      {/* ══════════ HERO CON VIDEO ══════════ */}
      <section className="home__hero">
        <video className="home__hero-video" autoPlay muted loop playsInline>
          <source src="/assets/Ae_Vid_Actividad.mp4" type="video/mp4" />
        </video>
        <div className="home__hero-overlay" />
      </section>

      {/* ══════════ CARDS PRINCIPALES ══════════ */}
      <section className="home__cards-section">

        {/* Card 1: Minijuegos */}
        <div className="home__card">
          <div className="home__card-header"><span>MINIJUEGOS Y FACCIÓN</span></div>
          <div className="home__card-body">
            <img
              src="/assets/btn_minijuegos_sin_etiqueta.png"
              alt="Minijuegos"
              className="home__card-icon"
            />
            <Link to="/juegos" className="home__card-link">VER JUEGOS →</Link>
          </div>
        </div>

        {/* Card 2: Tests / Trivias */}
        <div className="home__card">
          <div className="home__card-header"><span>TESTS / TRIVIAS</span></div>
          <div className="home__card-body">
            <img
              src="/assets/trivias.png"
              alt="Trivias"
              className="home__card-icon"
            />
            <Link to="/trivias" className="home__card-link">VER TRIVIAS →</Link>
          </div>
        </div>

        {/* Card 3: Demonios */}
        <div className="home__card">
          <div className="home__card-header"><span>DEMONIOS</span></div>
          <div className="home__card-body">
            <img
              src="/assets/demonio.png"
              alt="Demonios"
              className="home__card-icon"
            />
            <Link to="/demonios" className="home__card-link">VER DEMONIOS →</Link>
          </div>
        </div>

      </section>

      {/* ══════════ NOVEDADES ══════════ */}
      <NovedadesSection charImg="/assets/img_personaje_home.png" />

      {/* ══════════ CARRUSEL INFERIOR ══════════ */}
      <BottomCarousel />

    </div>
  );
};

export default Home;