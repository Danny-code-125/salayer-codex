// ============================================================
// useFetch.js — Custom Hook
// Encapsula la lógica de fetch con estados de loading y error.
// Cumple el criterio 4: custom hook obligatorio.
// Uso:
//   const { data, loading, error, refetch } = useFetch(fetchFn, deps)
// ============================================================
import { useState, useEffect, useCallback } from "react";

const useFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función de carga que puede llamarse también manualmente (refetch)
  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(err.message || "Error al cargar datos");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    load();
  }, [load]);

  return { data, loading, error, refetch: load };
};

export default useFetch;
