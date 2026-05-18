import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  const handleLogout = () => { logout(); navigate("/login"); };
  const toggleMenu = (id) => setOpenMenu(openMenu === id ? null : id);
  const closeMenus = () => setOpenMenu(null);

  return (
    <nav className="navbar" onClick={closeMenus}>

      {/* ── LOGO IMAGEN ── */}
      <Link to="/home" className="navbar__logo">
        <img
          src="/assets/logo-blanco.png"
          alt="Slayer Codex"
          className="navbar__logo-img"
        />
      </Link>

      {/* ── LINKS ── */}
      <ul className="navbar__links">

        <li>
          <NavLink to="/perfil"
            className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
            ▼ PERFIL
          </NavLink>
        </li>

        <li className="dropdown"
          onClick={(e) => { e.stopPropagation(); toggleMenu("novedades"); }}>
          <span className="nav-link">▼ NOVEDADES</span>
          {openMenu === "novedades" && (
            <ul className="dropdown__menu">
              <li><Link to="/novedades" onClick={closeMenus}>Últimas Noticias</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown"
          onClick={(e) => { e.stopPropagation(); toggleMenu("personajes"); }}>
          <span className="nav-link">▼ PERSONAJES</span>
          {openMenu === "personajes" && (
            <ul className="dropdown__menu">
              <li><Link to="/cazadores" onClick={closeMenus}>Cazadores</Link></li>
              <li><Link to="/demonios"  onClick={closeMenus}>Demonios</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown"
          onClick={(e) => { e.stopPropagation(); toggleMenu("juegos"); }}>
          <span className="nav-link">▼ JUEGOS / TESTS Y TRIVIAS</span>
          {openMenu === "juegos" && (
            <ul className="dropdown__menu">
              <li><Link to="/juegos"  onClick={closeMenus}>Minijuegos</Link></li>
              <li><Link to="/trivias" onClick={closeMenus}>Tests y Trivias</Link></li>
            </ul>
          )}
        </li>

        <li>
          <NavLink to="/acerca"
            className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
            ▼ ACERCA DE
          </NavLink>
        </li>

      </ul>

      {/* ── SESIÓN ── */}
      <div className="navbar__user">
        {isAuthenticated ? (
          <div className="dropdown"
            onClick={(e) => { e.stopPropagation(); toggleMenu("user"); }}>
            <div className="user-avatar">
              {user?.nombre?.[0]?.toUpperCase() || "U"}
            </div>
            {openMenu === "user" && (
              <ul className="dropdown__menu dropdown__menu--right">
                <li><Link to="/perfil" onClick={closeMenus}>Mi Perfil</Link></li>
                <li onClick={handleLogout}>Cerrar Sesión</li>
              </ul>
            )}
          </div>
        ) : (
          <Link to="/login" className="navbar__login-btn">
            INICIAR SESIÓN
          </Link>
        )}
      </div>

    </nav>
  );
};

export default Navbar;