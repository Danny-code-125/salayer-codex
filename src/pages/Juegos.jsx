import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { getJuegos } from "../api/apiService";
import NovedadesSection from "../components/NovedadesSection";
import BottomCarousel from "../components/BottomCarousel";
import "./Juegos.css";

const FALLBACK = [
  { id: 1, nombre: "DESAFÍO DE VELOCIDAD",         descripcion: "Pon a prueba tus reflejos.",        imagen: "/assets/btn_juego_1_sin_etiqueta.png" },
  { id: 2, nombre: "BATALLA CONTRA DEMONIOS",      descripcion: "Enfrenta a los más poderosos.",     imagen: "/assets/btn_juego_2_sin_etiqueta.png" },
  { id: 3, nombre: "ENTRENAMIENTO DE RESPIRACIÓN", descripcion: "Domina el arte de la respiración.", imagen: "/assets/btn_juego_3_sin_etiqueta.png" },
];

const IMAGENES = [
  "/assets/btn_juego_1_sin_etiqueta.png",
  "/assets/btn_juego_2_sin_etiqueta.png",
  "/assets/btn_juego_3_sin_etiqueta.png",
];

const Juegos = () => {
  const { data: juegos, loading } = useFetch(getJuegos);
  const [activo, setActivo] = useState(null);

  const lista = (juegos && juegos.length > 0)
    ? juegos.map((j, i) => ({ ...j, imagen: j.imagen || IMAGENES[i] }))
    : FALLBACK;

  return (
    <div className="juegos page-container fade-in">

      <div className="juegos__banner">
        <h1 className="juegos__banner-title">EN EL UNIVERSO DE DEMON SLAYER</h1>
      </div>

      {loading && <div className="state-box"><div className="spinner" />Cargando juegos...</div>}

      <section className="juegos__grid">
        {lista.map((juego, idx) => (
          <div key={juego.id || idx} className="juego-card">
            <div className="juego-card__label">
              🎮 JUEGO {String(idx + 1).padStart(2, "0")}
            </div>
            <div className="juego-card__img-wrap">
              {juego.imagen
                ? <img src={juego.imagen} alt={juego.nombre} />
                : <div className="juego-card__img-placeholder"><span>JUEGO {idx + 1}</span></div>
              }
            </div>
            <div className="juego-card__body">
              <p className="juego-card__nombre">{juego.nombre}</p>
              <button className="btn-primary" onClick={() => setActivo(juego)}>JUGAR</button>
            </div>
          </div>
        ))}
      </section>

      {activo && (
        <div className="juego-modal" onClick={() => setActivo(null)}>
          <div className="juego-modal__content" onClick={(e) => e.stopPropagation()}>
            <h2 className="juego-modal__title">{activo.nombre}</h2>
            <p className="juego-modal__desc">{activo.descripcion || "¡Próximamente!"}</p>
            <button className="btn-red" onClick={() => setActivo(null)}>CERRAR</button>
          </div>
        </div>
      )}

      <NovedadesSection charImg="/assets/img_personaje_home.png" />
      <BottomCarousel />
    </div>
  );
};

export default Juegos;