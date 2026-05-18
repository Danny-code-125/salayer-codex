import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { getNovedades } from "../api/apiService";
import "./NovedadesSection.css";

// Texto de fallback cuando la API no devuelve datos
const FALLBACK = [
  "La película Demon Slayer: Kimetsu no Yaiba – Infinity Castle, uno de los mayores éxitos de anime reciente, llegará a plataformas de streaming en 2026, aunque no ha sido confirmada una fecha exacta.",
  "La película Demon Slayer: Kimetsu no Yaiba – Infinity Castle, uno de los mayores éxitos de anime reciente, llegará a plataformas de streaming en 2026, aunque no ha sido confirmada una fecha exacta.",
  "La película Demon Slayer: Kimetsu no Yaiba – Infinity Castle, uno de los mayores éxitos de anime reciente, llegará a plataformas de streaming en 2026, aunque no ha sido confirmada una fecha exacta.",
  "La película Demon Slayer: Kimetsu no Yaiba – Infinity Castle, uno de los mayores éxitos de anime reciente, llegará a plataformas de streaming en 2026, aunque no ha sido confirmada una fecha exacta.",
  "La película Demon Slayer: Kimetsu no Yaiba – Infinity Castle, uno de los mayores éxitos de anime reciente, llegará a plataformas de streaming en 2026, aunque no ha sido confirmada una fecha exacta.",
];

const NovedadesSection = ({ charImg = null }) => {
  const { data: novedades, loading } = useFetch(getNovedades);
  const [busqueda, setBusqueda] = useState("");

  // Si la API devuelve datos los usa, si no usa el fallback
  const fuente = (novedades && novedades.length > 0)
    ? novedades.map((n) => n.titulo || n.texto || n.descripcion || "")
    : FALLBACK;

  const filtradas = fuente.filter((texto) =>
    texto.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="nov">

      {/* Header barra roja */}
      <div className="nov__header">
        <h2 className="nov__title">NOVEDADES</h2>
      </div>

      {/* Cuerpo */}
      <div className="nov__body">

        {/* Izquierda */}
        <div className="nov__left">
          <div className="nov__search">
            <input
              type="text"
              placeholder="Buscar novedades"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="nov__input"
            />
            <button className="nov__search-btn">BUSCAR</button>
          </div>

          <div className="nov__list">
            {loading && <p className="nov__msg">Cargando...</p>}
            {!loading && filtradas.map((texto, i) => (
              <p key={i} className="nov__item">{texto}</p>
            ))}
          </div>
        </div>

        {/* Derecha: personaje */}
        <div className="nov__right">
          {charImg && (
            <img src={charImg} alt="personaje" className="nov__char-img" />
          )}
        </div>

      </div>

     

    </section>
  );
};

export default NovedadesSection;