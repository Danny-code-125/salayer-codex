import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar         from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import SplashScreen   from "./components/SplashScreen";
import Home           from "./pages/Home";
import Login          from "./pages/Login";
import Perfil         from "./pages/Perfil";
import Cazadores      from "./pages/Cazadores";
import CazadorDetalle from "./pages/CazadorDetalle";
import Demonios       from "./pages/Demonios";
import Juegos         from "./pages/Juegos";
import Trivias        from "./pages/Trivias";
import Novedades      from "./pages/Novedades";
import AcercaDe       from "./pages/AcercaDe";

// Componente que oculta el Navbar en /login
const Layout = ({ children }) => {
  const location = useLocation();
  const sinNavbar = ["/login", "/registro"];
  const mostrarNavbar = !sinNavbar.includes(location.pathname);

  return (
    <>
      {mostrarNavbar && <Navbar />}
      {children}
    </>
  );
};

const App = () => {
  const [splashDone, setSplashDone] = useState(false);

  if (!splashDone) {
    return <SplashScreen onFinish={() => setSplashDone(true)} />;
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>

            {/* Raíz → login si no autenticado */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Login — sin navbar */}
            <Route path="/login" element={<Login />} />

            {/* Vistas públicas — con navbar */}
            <Route path="/home"      element={<Home />} />
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/cazadores" element={<Cazadores />} />
            <Route path="/cazadores/:id" element={<CazadorDetalle />} />
            <Route path="/demonios"  element={<Demonios />} />
            <Route path="/juegos"    element={<Juegos />} />
            <Route path="/trivias"   element={<Trivias />} />
            <Route path="/acerca"    element={<AcercaDe />} />

            {/* Ruta protegida */}
            <Route path="/perfil" element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            } />

            {/* 404 */}
            <Route path="*" element={
              <div className="state-box page-container" style={{ paddingTop: "6rem" }}>
                <p style={{ fontSize: "4rem", fontFamily: "var(--font-title)" }}>404</p>
                <p>Página no encontrada</p>
              </div>
            } />

          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;