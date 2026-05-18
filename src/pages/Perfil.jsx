// Perfil.jsx — RUTA PROTEGIDA — rediseñado según wireframe
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NovedadesSection from "../components/NovedadesSection";
import BottomCarousel from "../components/BottomCarousel";
import "./Perfil.css";

const Perfil = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [faccion, setFaccion] = useState("cazadores");
  const [fondo, setFondo] = useState("oscuro");

  const handleLogout = () => { logout(); navigate("/login"); };

  return (
    <div className="perfil page-container fade-in">

      {/* ── Banner ── */}
      <div className="perfil__banner">
        <h1 className="perfil__banner-title">PERFIL</h1>
      </div>

      <div className="perfil__content">

        {/* ── Tarjeta principal: foto + nombre + facción + fondo ── */}
        <div className="perfil__top-card">

          {/* Avatar */}
          <div className="perfil__avatar-wrap">
            {/* ⚠️ IMAGEN: foto del usuario
                Si la API devuelve user.foto usa:
                <img src={user.foto} alt={user.nombre} className="perfil__avatar-img" />
                Si no, el círculo de placeholder */}
            <div className="perfil__avatar">
              {user?.nombre?.[0]?.toUpperCase() || "U"}
            </div>
            <div className="perfil__user-info">
              <h2 className="perfil__username">
                {user?.nombre || user?.username || "Cazador"}
              </h2>

              {/* Facción */}
              <div className="perfil__faccion">
                <span className="perfil__faccion-label">FACCIÓN:</span>
                <label className="perfil__radio-label">
                  <input type="radio" name="faccion" value="cazadores"
                    checked={faccion === "cazadores"}
                    onChange={() => setFaccion("cazadores")} />
                  Cazadores
                </label>
                <label className="perfil__radio-label">
                  <input type="radio" name="faccion" value="demonios"
                    checked={faccion === "demonios"}
                    onChange={() => setFaccion("demonios")} />
                  Demonios
                </label>
              </div>
            </div>
          </div>

          {/* Personaliza tu fondo */}
          <div className="perfil__fondo">
            <p className="perfil__fondo-label">PERSONALIZA TU FONDO:</p>
            <div className="perfil__fondo-options">
              <label className="perfil__radio-label">
                <input type="radio" name="fondo" value="claro"
                  checked={fondo === "claro"}
                  onChange={() => setFondo("claro")} />
                Claro
              </label>
              <label className="perfil__radio-label">
                <input type="radio" name="fondo" value="oscuro"
                  checked={fondo === "oscuro"}
                  onChange={() => setFondo("oscuro")} />
                Oscuro
              </label>
            </div>
          </div>

        </div>

        {/* ── Insignias obtenidas ── */}
        <div className="perfil__stat-card">
          <p className="perfil__stat-label">INSIGNIAS OBTENIDAS</p>
          <p className="perfil__stat-number">+25</p>
        </div>

        {/* ── Marcos obtenidos ── */}
        <div className="perfil__stat-card">
          <p className="perfil__stat-label">MARCOS OBTENIDOS</p>
          <p className="perfil__stat-number">+10</p>
        </div>

        {/* Botón cerrar sesión */}
        <button className="perfil__logout" onClick={handleLogout}>
          ← CERRAR SESIÓN
        </button>

      </div>

      {/* ── Novedades ── */}
      {/* ⚠️ IMAGEN: charImg="/assets/char-kanao-full.png" */}
      <NovedadesSection />

      {/* ── Carrusel inferior ── */}
      <BottomCarousel />

    </div>
  );
};

export default Perfil;
