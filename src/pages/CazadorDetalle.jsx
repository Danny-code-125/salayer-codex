// ============================================================
// CazadorDetalle.jsx
// Vista de detalle de un cazador individual.
// Consume: GET /cazadores/:id
// ============================================================
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getCazadorById } from "../api/apiService";
import "./CazadorDetalle.css";

const CazadorDetalle = () => {
  const { id } = useParams();

  // El custom hook recibe la función de fetch con el ID
  const { data: cazador, loading, error } = useFetch(
    () => getCazadorById(id),
    [id] // dependencia: re-fetch si cambia el ID
  );

  if (loading) return <div className="state-box page-container"><div className="spinner" />Cargando...</div>;
  if (error)   return <div className="state-box error page-container">⚠ {error}</div>;
  if (!cazador) return <div className="state-box page-container">Cazador no encontrado.</div>;

  return (
    <div className="cdet page-container fade-in">

      {/* Banner del personaje */}
      <div className="cdet__banner">
        {/* ⚠️ IMAGEN: Banner/fondo del personaje
            Si la API devuelve cazador.banner o cazador.fondo usa esa URL */}
        <div className="cdet__banner-overlay" />
        <div className="cdet__banner-content">
          <h1 className="cdet__nombre">{cazador.nombre}</h1>
          {cazador.rango && <span className="cdet__rango">{cazador.rango}</span>}
        </div>
      </div>

      <div className="cdet__content">

        {/* Imagen + datos básicos */}
        <div className="cdet__top">
          <div className="cdet__img-wrap">
            {/* ⚠️ IMAGEN: Retrato grande del cazador
                Si la API devuelve cazador.imagen usa:
                <img src={cazador.imagen} alt={cazador.nombre} /> */}
            {cazador.imagen ? (
              <img src={cazador.imagen} alt={cazador.nombre} />
            ) : (
              <div className="cdet__img-placeholder">
                {/* Imagen grande del cazador — por agregar */}
                <span>IMG</span>
              </div>
            )}
          </div>

          <div className="cdet__datos">
            {cazador.respiracion && (
              <div className="cdet__dato-row">
                <span className="cdet__dato-label">Respiración</span>
                <span className="cdet__dato-val">{cazador.respiracion}</span>
              </div>
            )}
            {cazador.katana && (
              <div className="cdet__dato-row">
                <span className="cdet__dato-label">Nichirin</span>
                <span className="cdet__dato-val">{cazador.katana}</span>
              </div>
            )}
            {cazador.estado && (
              <div className="cdet__dato-row">
                <span className="cdet__dato-label">Estado</span>
                <span className="cdet__dato-val">{cazador.estado}</span>
              </div>
            )}
            {/* Muestra todos los campos adicionales de la API */}
            {Object.entries(cazador)
              .filter(([k]) => !["id","nombre","rango","imagen","respiracion","katana","estado"].includes(k))
              .map(([k, v]) => (
                <div key={k} className="cdet__dato-row">
                  <span className="cdet__dato-label">{k}</span>
                  <span className="cdet__dato-val">{String(v)}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Descripción si existe */}
        {cazador.descripcion && (
          <div className="cdet__descripcion">
            <h3 className="cdet__desc-title">DESCRIPCIÓN</h3>
            <p>{cazador.descripcion}</p>
          </div>
        )}

        <Link to="/cazadores" className="btn-primary" style={{ marginTop: "2rem", maxWidth: "200px" }}>
          ← VOLVER
        </Link>
      </div>
    </div>
  );
};

export default CazadorDetalle;
