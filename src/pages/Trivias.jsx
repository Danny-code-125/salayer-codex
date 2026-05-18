// Trivias.jsx — Lista numerada 01-05 + Novedades + Carrusel (según wireframe)
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { getTrivias } from "../api/apiService";
import NovedadesSection from "../components/NovedadesSection";
import BottomCarousel from "../components/BottomCarousel";
import "./Trivias.css";


const FALLBACK = [
  { id: 1, pregunta: "¿Cuál es tu respiración más afín?",   opciones: ["Agua","Fuego","Viento","Piedra"], correcta: "Agua" },
  { id: 2, pregunta: "¿Qué personaje eres?",                opciones: ["Tanjiro","Zenitsu","Inosuke","Kanao"], correcta: "Tanjiro" },
  { id: 3, pregunta: "¿Qué Pilar te representa?",           opciones: ["Pilar del Agua","Pilar del Fuego","Pilar del Viento","Pilar de la Piedra"], correcta: "Pilar del Agua" },
  { id: 4, pregunta: "¿Qué tipo de demonio serías?",        opciones: ["Luna Superior","Luna Inferior","General","Ninguno"], correcta: "Luna Superior" },
  { id: 5, pregunta: "¿Qué tipo de espada Nichirin tendrías?", opciones: ["Roja","Azul","Verde","Negra"], correcta: "Negra" },
];

const Trivias = () => {
  const { data: trivias } = useFetch(getTrivias);
  const lista = (trivias && trivias.length > 0) ? trivias : FALLBACK;

  const [activa, setActiva] = useState(null);
  const [seleccion, setSel] = useState(null);
  const [score, setScore] = useState(0);
  const [respondidas, setResp] = useState({});

  const abrir = (t) => { setActiva(t); setSel(null); };
  const cerrar = () => { setActiva(null); setSel(null); };

  const elegir = (op) => {
    if (respondidas[activa.id]) return;
    setSel(op);
    const correcta = activa.respuesta_correcta || activa.correcta;
    if (op === correcta) setScore((s) => s + 1);
    setResp({ ...respondidas, [activa.id]: op });
  };

  return (
    <div className="trivias page-container fade-in">

      <div className="trivias__banner">
        <h1 className="trivias__title">TESTS Y TRIVIAS</h1>
      </div>

      {/* Lista numerada como el wireframe */}
      <div className="trivias__lista">
        {lista.map((t, idx) => {
          const respondida = respondidas[t.id];
          return (
            <div key={t.id || idx} className={`trivia-item ${respondida ? "trivia-item--done" : ""}`}
              onClick={() => abrir(t)}>
              <div className="trivia-item__tag">☑ TEST - TRIVIAS</div>
              <div className="trivia-item__row">
                <span className="trivia-item__num">{String(idx + 1).padStart(2, "0")}</span>
                <span className="trivia-item__pregunta">{t.pregunta || t.titulo}</span>
                {respondida && <span className="trivia-item__check">✓</span>}
              </div>
            </div>
          );
        })}

        {score > 0 && (
          <div className="trivias__score-badge">
            Puntuación: {score} / {Object.keys(respondidas).length}
          </div>
        )}
      </div>

      {/* Modal de pregunta */}
      {activa && (
        <div className="trivia-modal" onClick={cerrar}>
          <div className="trivia-modal__box" onClick={(e) => e.stopPropagation()}>
            <h3 className="trivia-modal__pregunta">{activa.pregunta || activa.titulo}</h3>
            <div className="trivia-modal__opciones">
              {(activa.opciones || []).map((op, i) => {
                const correcta = activa.respuesta_correcta || activa.correcta;
                let cls = "trivia-op";
                if (seleccion) {
                  if (op === correcta)       cls += " trivia-op--ok";
                  else if (op === seleccion) cls += " trivia-op--fail";
                }
                return (
                  <button key={i} className={cls} onClick={() => elegir(op)}>{op}</button>
                );
              })}
            </div>
            {seleccion && (
              <button className="btn-red" style={{ marginTop: "1rem" }} onClick={cerrar}>
                CERRAR
              </button>
            )}
          </div>
        </div>
      )}

      <NovedadesSection charImg="/assets/img_personaje_home.png" />
      <BottomCarousel />
    </div>
  );
};

export default Trivias;
