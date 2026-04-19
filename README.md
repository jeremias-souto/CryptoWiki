# CryptoWiki

## Descripción del Proyecto
CryptoWiki es una aplicación web que proporciona información detallada sobre diferentes criptomonedas, como Bitcoin y Ethereum. El proyecto está dividido en dos partes: una interfaz de usuario visual (frontend) que permite seleccionar una criptomoneda específica, y un servidor (backend) que provee la información, su creador, año de lanzamiento, mecanismos de consenso y más, consultando archivos JSON locales.

## Tecnologías Usadas
**Frontend:**
- HTML5
- CSS3
- JavaScript (Vanilla)

**Backend:**
- Node.js
- Express.js
- CORS
- File System (`fs` de Node.js para leer datos JSON)

## Cómo Levantar el Proyecto en Modo Local

Para ejecutar el proyecto en tu computadora, sigue estos pasos:

1. **Preparar el entorno:** Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu computadora.
2. **Navegar al backend:** Abre una terminal y dirígete a la carpeta `backend` del proyecto:
   ```bash
   cd backend
   ```
3. **Instalar dependencias:** Instala las librerías necesarias ejecutando:
   ```bash
   npm install
   ```
4. **Iniciar el servidor:** Levanta el backend ejecutando el siguiente comando:
   ```bash
   node server.js
   ```
   *(Verás un mensaje indicando que el servidor corre en `http://localhost:3000`)*.
5. **Abrir la aplicación:** Abre tu navegador web y navega a [http://localhost:3000](http://localhost:3000). El backend de Express se encarga de servir el frontend de forma estática, por lo que no es necesario abrir el archivo `index.html` manualmente ni usar extensiones como Live Server.

---

Creado por Jeremias Souto con ❤️ para la comunidad!
