# 🎾 Tennis Predictor 2026

Una aplicación web interactiva que analiza partidos de tenis de los circuitos **ATP, WTA e ITF** en tiempo real, proporcionando estimaciones de victoria basadas en rendimiento e historial directo entre jugadores.

🚀 **Ver sitio en vivo:** [prediccionesdetenisgratis.netlify.app](https://prediccionesdetenisgratis.netlify.app)

---

## 🌟 Características Principales

- 📊 **Probabilidades en tiempo real:** Cálculo estimado de victoria para cada jugador según métricas y rendimiento.
- 🧱 **Identificación didáctica de superficies:** Visualización clara del tipo de cancha (Tierra Batida, Pista Dura, Césped, etc.) con formato visual intuitivo.
- ⚔️ **Historial H2H:** Consulta rápida de enfrentamientos directos previos entre ambos tenistas.
- 🔄 **Actualización automática:** Refresco continuo de datos en segundo plano cada 5 minutos sin necesidad de recargar la página.
- 🎨 **Interfaz de usuario moderna (Estilo 2026):** Diseño responsivo optimizado para móviles y escritorio con gradientes Mesh/Glow y tipografía *Plus Jakarta Sans*.

---

## 🛠️ Stack Tecnológico

### **Frontend**
- **HTML5 & CSS3:** Estilo moderno con soporte para efectos *glassmorphism* y gradientes dinámicos.
- **JavaScript (ES6+):** Renderizado dinámico en el DOM, manejo de peticiones asíncronas (`fetch`) y automatización con `setInterval`.
- **Hosting:** Netlify.

### **Backend**
- **Node.js + Express:** API REST intermedia para gestionar CORS y la comunicación con la API externa.
- **Dotenv:** Gestión segura de variables de entorno (API Keys).
- **Hosting:** Render (Web Service).

### **API Externa**
- **RapidAPI:** `Tennis API - ATP WTA ITF` para la extracción de datos actualizados del circuito profesional.

---

## 📁 Estructura del Proyecto

```text
tennis-predictor/
├── index.html          # Interfaz principal de la aplicación y lógica client-side
├── style.css           # Estilos globales y diseño responsivo
├── server.js           # Servidor Node.js / Express (Proxy Backend)
├── package.json        # Configuración de dependencias de Node.js
├── .gitignore          # Archivo para excluir .env y node_modules de Git
└── README.md           # Documentación del proyecto
