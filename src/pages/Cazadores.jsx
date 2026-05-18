// Cazadores.jsx — Grid 3x2 + Novedades + Carrusel (según wireframe)
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getCazadores } from "../api/apiService";
import NovedadesSection from "../components/NovedadesSection";
import BottomCarousel from "../components/BottomCarousel";
import "./Cazadores.css";

const Cazadores = () => {
  const { data: cazadores, loading, error } = useFetch(getCazadores);

  return (
    <div className="cazadores page-container fade-in">

      {/* Banner */}
      <div className="cazadores__banner">
        <h1 className="cazadores__banner-title">CAZADORES</h1>
      </div>

      {/* Grid 3x2 */}
      <section className="cazadores__grid-section">
        {loading && <div className="state-box"><div className="spinner" />Cargando cazadores...</div>}
        {error   && <div className="state-box error">⚠ {error}</div>}

        {!loading && !error && (
          <div className="cazadores__grid">
            {(cazadores || []).map((cazador, idx) => (
              <Link to={`/cazadores/${cazador.id}`} key={cazador.id || idx} className="cazador-card">
                <div className="cazador-card__label">
                  ⚔️ CAZADOR {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="cazador-card__img-wrap">
                  {/* ⚠️ IMAGEN: Si la API devuelve cazador.imagen se muestra automático
                      Si no, agrega: public/assets/cazadores/cazador-0X.jpg */}
                  {cazador.imagen
                    ? <img src={cazador.imagen} alt={cazador.nombre} />
                    : <div className="cazador-card__img-placeholder"><span>IMG</span></div>
                  }
                </div>
                <div className="cazador-card__info">
                  <p className="cazador-card__nombre">{cazador.nombre}</p>
                  {cazador.rango && <p className="cazador-card__rango">{cazador.rango}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ⚠️ IMAGEN: charImg="/assets/char-tanjiro-full.png" */}
      <NovedadesSection />
      <BottomCarousel />
    </div>
  );
};

export default Cazadores;
