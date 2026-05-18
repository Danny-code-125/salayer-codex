import { useState } from "react";
import { Link } from "react-router-dom";
import "./BottomCarousel.css";

const ITEMS = [
  {
    id: "cazadores",
    label: "CAZADORES",
    link: "/cazadores",
    img: "/assets/1_img_slider_cazadores.png",
  },
  {
    id: "perfil",
    label: "PERFIL",
    link: "/perfil",
    img: "/assets/2_img_slider_perfil.png",
  },
  {
    id: "juegos",
    label: "MINIJUEGOS Y FACCIÓN",
    link: "/juegos",
    img: "/assets/3_img_slider_minijuegos.png",
  },
];

const BottomCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(1);

  const prev = () => setActiveIdx((i) => (i - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setActiveIdx((i) => (i + 1) % ITEMS.length);

  const prevI = (activeIdx - 1 + ITEMS.length) % ITEMS.length;
  const nextI = (activeIdx + 1) % ITEMS.length;

  return (
    <><div className="bcarousel">
      <button className="bcarousel__arrow" onClick={prev}>&#10094;</button>

      <div className="bcarousel__track">
        {[prevI, activeIdx, nextI].map((idx, pos) => {
          const item = ITEMS[idx];
          const isCenter = pos === 1;
          return (
            <Link
              to={item.link}
              key={`${item.id}-${pos}`}
              className={`bcarousel__card ${isCenter ? "bcarousel__card--active" : ""}`}
            >
              <div className="bcarousel__card-header">
                <span>{item.label}</span>
              </div>
              <div className={`bcarousel__card-body ${idx === 1 ? "bcarousel__card-body--white" : ""}`}>
                <img
                  src={item.img}
                  alt={item.label}
                  className="bcarousel__img" />
              </div>
            </Link>
          );
        })}
      </div>

      <button className="bcarousel__arrow" onClick={next}>&#10095;</button>

    </div><div className="nov__footer">©CMMD-App</div></>
    
  );
  
};

export default BottomCarousel;
