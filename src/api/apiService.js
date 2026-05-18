// ============================================================
// API SIMULADA — SLAYER CODEX
// Asignatura: MUDISEPRO06
// URL Base: https://mock.apidog.com/m1/1257317-1254768-default
// ============================================================
const API_BASE_URL = "https://mock.apidog.com/m1/1257317-1254768-default";

// ---------- Helper genérico ----------
const apiFetch = async (path, options = {}) => {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
  return res.json();
};

// ---------- NOVEDADES ----------
export const getNovedades = () => apiFetch("/novedades");
export const getNovedadesByCategoria = (cat) =>
  apiFetch(`/novedades?categoria=${cat}`);

// ---------- CAZADORES ----------
export const getCazadores = (estado = "activo") =>
  apiFetch(`/cazadores?estado=${estado}`);
export const getCazadorById = (id) => apiFetch(`/cazadores/${id}`);
export const getCazadoresByEstado = (estado) =>
  apiFetch(`/cazadores?estado=${estado}`);

// ---------- DEMONIOS ----------
export const getDemonios = () => apiFetch("/demonios");
export const getDemonioById = (id) => apiFetch(`/demonios/${id}`);
export const getDemoniosByLuna = (luna) =>
  apiFetch(`/demonios?luna=${luna}`);

// ---------- JUEGOS ----------
export const getJuegos = () => apiFetch("/juegos");
export const getJuegoById = (id) => apiFetch(`/juegos/${id}`);

// ---------- TRIVIAS ----------
export const getTrivias = () => apiFetch("/trivias");
export const getTriviasByDificultad = (dif) =>
  apiFetch(`/trivias?dificultad=${dif}`);

// ---------- USUARIOS ----------
export const getUsuarios = () => apiFetch("/usuarios");
export const getUsuarioById = (id) => apiFetch(`/usuarios/${id}`);
export const registrarUsuario = (data) =>
  apiFetch("/usuarios", {
    method: "POST",
    body: JSON.stringify(data),
  });

// ---------- PUNTUACIONES ----------
export const getPuntuaciones = () => apiFetch("/puntuaciones");
export const guardarPuntuacion = (data) =>
  apiFetch("/puntuaciones", {
    method: "POST",
    body: JSON.stringify(data),
  }); 