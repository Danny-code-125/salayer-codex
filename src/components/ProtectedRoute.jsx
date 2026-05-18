// ProtectedRoute.jsx
// requireAdmin=true → solo admins
// requireAdmin=false (default) → cualquier usuario autenticado
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="state-box page-container">
        <div className="spinner" />
        Verificando sesión...
      </div>
    );
  }

  // No autenticado → login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Requiere admin pero no lo es → home
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;