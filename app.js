const express = require('express');
const path = require('path');
require('dotenv').config(); // Carga las variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;

// Configuraciones de Express
app.use(express.urlencoded({ extended: true })); // Para leer datos de formularios
app.use(express.json()); // Para leer JSON
app.use(express.static(path.join(__dirname, 'src/public'))); // Archivos estáticos (CSS, JS, Imágenes)

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Ruta de prueba para ver si el servidor funciona
app.get('/', (req, res) => {
    res.send('<h1>Servidor de Estilo Encantado funcionando 🚀</h1>');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});