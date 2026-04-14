const sqlite3 = require('sqlite3').verbose();

// Esto creará el archivo Bestiario.db automáticamente en la carpeta
const db = new sqlite3.Database('./Bestiario.db');

db.serialize(() => {
    // Crear la tabla si no existe
    db.run(`CREATE TABLE IF NOT EXISTS enemigos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        vida INTEGER,
        dano INTEGER,
        descripcion TEXT
    )`);

    // Insertar un par de enemigos de prueba
    const stmt = db.prepare("INSERT INTO enemigos (nombre, vida, dano, descripcion) VALUES (?, ?, ?, ?)");

    stmt.run("Orco Básico", 100, 15, "Soldado raso del ejército enemigo. Lento pero muy resistente.");
    stmt.run("Duende Corredor", 40, 5, "Unidad muy veloz que ignora el combate y corre directo a la base.");

    stmt.finalize();

    console.log("¡Base de datos 'Bestiario.db' creada y poblada con éxito!");
});

db.close();