import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getDemonios } from "../api/apiService";
import NovedadesSection from "../components/NovedadesSection";
import BottomCarousel from "../components/BottomCarousel";
import "./Demonios.css";

const IMAGENES = [
  "/assets/btn_demonio_1_sin_etiqueta.png",
  "/assets/btn_demonio_2_sin_etiqueta.png",
  "/assets/btn_demonio_3_sin_etiqueta.png",
  "/assets/btn_demonio_4_sin_etiqueta.png",
  "/assets/btn_demonio_5_sin_etiqueta.png",
  "/assets/btn_demonio_6_sin_etiqueta.png",
];

const Demonios = () => {
  const { data: demonios, loading, error } = useFetch(getDemonios);

  // Asigna imagen por índice si la API no la devuelve
  const lista = (demonios || []).map((d, i) => ({
    ...d,
    imagen: d.imagen || IMAGENES[i] || null,
  }));

  return (
    <div className="demonios page-container fade-in">

      <div className="demonios__banner">
        <h1 className="demonios__banner-title">DEMONIOS</h1>
        <p className="demonios__banner-sub">Las Lunas del Inframundo</p>
      </div>

      {loading && <div className="state-box"><div className="spinner" />Cargando demonios...</div>}
      {error   && <div className="state-box error">⚠ {error}</div>}

      {!loading && !error && (
        <div className="demonios__grid">
          {lista.map((demonio, idx) => (
            <Link
              to={`/demonios/${demonio.id}`}
              key={demonio.id || idx}
              className="demonio-card"
            >
              <div className="demonio-card__label">
                😈 DEMONIO {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="demonio-card__img-wrap">
                {demonio.imagen
                  ? <img src={demonio.imagen} alt={demonio.nombre} />
                  : <div className="demonio-card__img-placeholder"><span>IMG</span></div>
                }
              </div>
              <div className="demonio-card__info">
                <p className="demonio-card__nombre">{demonio.nombre}</p>
                {demonio.luna && (
                  <p className="demonio-card__luna">🌙 {demonio.luna}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      <NovedadesSection charImg="/assets/img_personaje_home.png" />
      <BottomCarousel />
    </div>
  );
};

export default Demonios;