// AcercaDe.jsx
import BottomCarousel from "../components/BottomCarousel";
import "./AcercaDe.css";

const AcercaDe = () => (
  <div className="acerca page-container fade-in">
    <div className="acerca__banner">
      <h1 className="acerca__title">ACERCA DE</h1>
    </div>
    <div className="acerca__content">
      <div className="acerca__logo-wrap">
        {/* ⚠️ IMAGEN: <img src="/assets/logo-blanco.png" className="acerca__logo-img" /> */}
        <div className="acerca__logo-placeholder"><span>SC</span></div>
        <h2 className="acerca__app-name">SLAYER CODEX</h2>
        <p className="acerca__app-sub">Companion App — Demon Slayer Universe</p>
      </div>
      <div className="acerca__card">
        <h3 className="acerca__card-title">¿QUÉ ES SLAYER CODEX?</h3>
        <p className="acerca__card-text">
          Slayer Codex es una aplicación Companion dedicada al universo de
          <em> Demon Slayer: Kimetsu no Yaiba</em>. Aquí encontrarás información
          detallada sobre cazadores, demonios, trivias interactivas y minijuegos.
        </p>
      </div>
      <div className="acerca__card">
        <h3 className="acerca__card-title">TECNOLOGÍAS</h3>
        <div className="acerca__tech-grid">
          {["React 18","React Router v6","Vite","Apidog (Mock API)","Vercel"].map((t) => (
            <span key={t} className="acerca__tech-badge">{t}</span>
          ))}
        </div>
      </div>
      <div className="acerca__card acerca__card--credits">
        <h3 className="acerca__card-title">CRÉDITOS</h3>
        <p className="acerca__card-text">
          Desarrollado como actividad académica — Máster en Diseño y Producción Multimedia · UNIR 2026.
        </p>
        <p className="acerca__copy">©CMMD-App · 2026</p>
      </div>
    </div>
    <BottomCarousel />
  </div>
);

export default AcercaDe;
