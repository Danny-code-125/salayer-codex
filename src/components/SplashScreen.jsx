import { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="splash">
      <div className="splash__arc" />

      {/* Solo la imagen — sin círculo SC */}
      <div className="splash__logo">
        <img
          src="/assets/logo-blanco.png"
          alt="Slayer Codex"
          className="splash__logo-img"
        />
      </div>

      {/* Tarjeta de progreso */}
      <div className="splash__card">
        <div className="splash__triangle" />
        <div className="splash__bar-container">
          <div className="splash__bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="splash__label">{progress}% CARGANDO</p>
        <p className="splash__copy">©CMMD-App</p>
      </div>
    </div>
  );
};

export default SplashScreen;