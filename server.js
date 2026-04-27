const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // El navegador siempre hace una pregunta previa (OPTIONS) antes del GET.
    // Con esto le decimos a la API que responda "Sí, tienes permiso" automáticamente.
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
});
// ---------------------------------------------

const db = new sqlite3.Database('./Bestiario.db');

// Redirigir la ruta raíz a la documentación de Swagger
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

// Endpoint para obtener todos los enemigos del archivo SQLite.
app.get('/enemigos', (req, res) => {
    db.all("SELECT * FROM enemigos", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "data": rows });
    });
});

// Documentación interactiva de Swagger.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log("Servidor API corriendo en http://localhost:3000");
    console.log("Swagger disponible en http://localhost:3000/api-docs");
})