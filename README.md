# 🗡️ SLAYER CODEX — Companion App
**UNIR · Máster Diseño y Producción Multimedia · Actividad 2 (Laboratorio)**

---

## ⚙️ INSTALACIÓN Y EJECUCIÓN

```bash
# 1. Instalar dependencias
npm install

# 2. Modo desarrollo
npm run dev

# 3. Build para producción (Vercel)
npm run build
```

---

## 🔑 PASO OBLIGATORIO ANTES DE EJECUTAR: URL DE LA API

Abre el archivo **`src/api/apiService.js`** y reemplaza la URL del mock server:

```js
// Línea 12 de apiService.js:
const API_BASE_URL = "https://mock.apidog.com/m1/TU_URL_MOCK_AQUI";
//                                              ^^^^^^^^^^^^^^^^^^^^
//  ⚠️  Cómo obtener tu URL:
//  1. Abre Apidog → proyecto "Slayer Codex"
//  2. Selecciona cualquier endpoint (ej: GET /cazadores)
//  3. Ve a la pestaña "Mock"
//  4. Copia la URL base del mock server
```

---

## 🖼️ IMÁGENES — GUÍA COMPLETA

Coloca todos los assets en la carpeta **`public/assets/`**  
(crea la carpeta si no existe).

### Imágenes requeridas:

| Archivo                            | Descripción                                     | Dónde se usa     |
|------------------------------------|--------------------------------------------------|-----------------|
| `public/assets/logo.png`           | Logo pequeño Slayer Codex (círculo + texto)     | Navbar          |
| `public/assets/logo-large.png`     | Logo grande con personaje                       | SplashScreen, AcercaDe |
| `public/assets/hero-bg.jpg`        | Fondo del hero (humo/fuego oscuro)              | Home            |
| `public/assets/juegos-bg.jpg`      | Fondo del banner de juegos                      | Juegos          |
| `public/assets/icon-juego.png`     | Ícono de control (teal, fondo transparente)     | Home card 1     |
| `public/assets/icon-trivia.png`    | Ícono de checkbox (teal, fondo transparente)    | Home card 2     |
| `public/assets/icon-demonio.png`   | Ícono de demonio (teal, fondo transparente)     | Home card 3     |
| `public/assets/char-home-1.png`    | Personaje recortado (Tanjiro/Kanao)             | Home card 1     |
| `public/assets/char-home-2.png`    | Personaje recortado (Inosuke)                   | Home card 2     |
| `public/assets/char-home-3.png`    | Personaje recortado (Tanjiro haori)             | Home card 3     |
| `public/assets/char-tanjiro-full.png` | Tanjiro de pie (decorativo lateral)          | Cazadores       |
| `public/assets/juego-01.jpg`       | Cover juego 1 (Akaza/rojo)                      | Juegos          |
| `public/assets/juego-02.jpg`       | Cover juego 2 (Tokito/azul)                     | Juegos          |
| `public/assets/juego-03.jpg`       | Cover juego 3 (Kokushibo/gris)                  | Juegos          |

### Imágenes dinámicas (de la API):
- **Cazadores**: si `cazador.imagen` existe en la API → se muestra automáticamente
- **Demonios**: si `demonio.imagen` existe en la API → se muestra automáticamente

### Cómo activar las imágenes en el código:
Busca los comentarios `⚠️ IMAGEN:` en cada archivo `.jsx` y sigue las instrucciones.

---

## 📋 RUTAS DE LA APLICACIÓN

| Ruta              | Vista            | Protegida |
|-------------------|------------------|-----------|
| `/`               | → redirect /home | No        |
| `/home`           | Landing          | No        |
| `/login`          | Login            | No        |
| `/perfil`         | Perfil           | **SÍ** ✅ |
| `/cazadores`      | Grid cazadores   | No        |
| `/cazadores/:id`  | Detalle cazador  | No        |
| `/demonios`       | Grid demonios    | No        |
| `/juegos`         | Minijuegos       | No        |
| `/trivias`        | Tests y trivias  | No        |
| `/novedades`      | Noticias         | No        |
| `/acerca`         | Acerca de        | No        |

---

## ✅ RÚBRICA CUMPLIDA

| Criterio | Estado | Implementación |
|----------|--------|----------------|
| 1. Landing view | ✅ | `/home` — Hero banner + 3 cards |
| 2. +5 vistas adicionales | ✅ | Cazadores, Demonios, Juegos, Trivias, Novedades, AcercaDe, CazadorDetalle |
| 3. React Router + ruta protegida | ✅ | `/perfil` → ProtectedRoute → redirige a /login |
| 4. Custom hook | ✅ | `useFetch.js` con useState + useEffect + useCallback |
| 5. useState, useEffect, useContext | ✅ | Usados en múltiples componentes |
| 6. Despliegue público | ✅ | Listo para Vercel con `npm run build` |
| 7. Datos de API simulada | ✅ | Todos los endpoints de Apidog integrados |
| 8. Vídeo memoria | 📹 | Por grabar |

---

## 🚀 DESPLIEGUE EN VERCEL

```bash
# Opción A: desde Vercel CLI
npx vercel --prod

# Opción B: desde GitHub
# 1. Sube el proyecto a GitHub (sin node_modules)
# 2. Conecta el repo en vercel.com
# 3. Framework: Vite | Build: npm run build | Output: dist
```

---

## 📁 ESTRUCTURA DEL PROYECTO

```
slayer-codex/
├── public/
│   └── assets/          ← PON AQUÍ TODAS LAS IMÁGENES
├── src/
│   ├── api/
│   │   └── apiService.js        ← Todos los endpoints
│   ├── context/
│   │   └── AuthContext.jsx      ← useContext (auth global)
│   ├── hooks/
│   │   └── useFetch.js          ← Custom hook obligatorio
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── ProtectedRoute.jsx
│   │   └── SplashScreen.jsx / .css
│   ├── pages/
│   │   ├── Home.jsx / .css
│   │   ├── Login.jsx / .css
│   │   ├── Perfil.jsx / .css    ← RUTA PROTEGIDA
│   │   ├── Cazadores.jsx / .css
│   │   ├── CazadorDetalle.jsx / .css
│   │   ├── Demonios.jsx / .css
│   │   ├── Juegos.jsx / .css
│   │   ├── Trivias.jsx / .css
│   │   ├── Novedades.jsx / .css
│   │   └── AcercaDe.jsx / .css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx                  ← Router principal
│   └── main.jsx                 ← Entrada React
├── index.html
├── vite.config.js
├── package.json
└── README.md
```
