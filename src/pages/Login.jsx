import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getUsuarios } from "../api/apiService";
import "./Login.css";

// ============================================================
// USUARIOS DEL SISTEMA
// Admin → hardcodeado local (no está en la API)
// Usuarios normales → vienen de la API (contraseña: "slayer123")
// ============================================================
const ADMIN_USER = {
  id: 0,
  nombre: "Administrador",
  email: "admin@slayercodex.com",
  username: "admin",
  password: "admin123",
  rol: "admin",
  nivelCazador: "Hashira",
  puntosTotales: 9999,
  activo: true,
};

const Login = () => {
  const { login }   = useAuth();
  const navigate    = useNavigate();
  const location    = useLocation();
  const from        = location.state?.from?.pathname || "/home";

  const [form, setForm]       = useState({ username: "", password: "" });
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError("Por favor completa todos los campos.");
      return;
    }
    setLoading(true);
    try {

      // ── 1. Verificar si es ADMIN ──
      if (
        (form.username === ADMIN_USER.username ||
         form.username === ADMIN_USER.email) &&
        form.password === ADMIN_USER.password
      ) {
        login(ADMIN_USER);
        navigate(from, { replace: true });
        return;
      }

      // ── 2. Verificar usuarios de la API ──
      // Contraseña por defecto para usuarios de la API: "slayer123"
      if (form.password !== "slayer123") {
        setError("Usuario o contraseña incorrectos.");
        return;
      }

      const usuarios = await getUsuarios();
      const found = usuarios?.find(
        (u) =>
          u.email === form.username ||
          u.nombre === form.username
      );

      if (found) {
        login({ ...found, rol: "usuario" });
        navigate(from, { replace: true });
      } else {
        setError("Usuario o contraseña incorrectos.");
      }

    } catch {
      setError("Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login page-container fade-in">
      <div className="login__card">

        <div className="login__logo">
          <img
            src="/assets/logo-blanco.png"
            alt="Slayer Codex"
            className="login__logo-img"
          />
        </div>

        <h2 className="login__title">INICIAR SESIÓN</h2>
        <p className="login__subtitle">Accede al universo Demon Slayer</p>

        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__field">
            <label htmlFor="username">USUARIO O EMAIL</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="tu_usuario o email"
              value={form.username}
              onChange={handleChange}
              autoComplete="username"
            />
          </div>

          <div className="login__field">
            <label htmlFor="password">CONTRASEÑA</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          {error && <p className="login__error">{error}</p>}

          <button type="submit" className="login__btn" disabled={loading}>
            {loading ? "VERIFICANDO..." : "ENTRAR"}
          </button>
        </form>

        

        <p classNam e="login__register">
          ¿No tienes cuenta?{" "}
          <Link to="/registro" className="login__link">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;