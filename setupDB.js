const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./Bestiario.db');

db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS enemigos`);

    db.run(`CREATE TABLE IF NOT EXISTS enemigos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        vida INTEGER,
        dano INTEGER,
        descripcion TEXT
    )`);

    const stmt = db.prepare("INSERT INTO enemigos (nombre, vida, dano, descripcion) VALUES (?, ?, ?, ?)");

    // Insertamos la lista oficial
    stmt.run("Guard", 50, 10, "Regimiento base del ejército enemigo. Equipados con armaduras ligeras y espadas cortas, patrulla las fronteras del reino.");
    stmt.run("Ratcher", 25, 7, "Meticulosos y escurridizos, esta compañia de roedores disparará a distancia con una precisión inhumana");
    stmt.run("Elite", 250, 20, "División de veteranos de incontables escaramuzas fronterizas. Portan una armaduras pesadas forjadas en las profundidades.");
    stmt.run("Boss", 1000, 35, "Líderes despiadados que han unificado a las tribus salvajes bajo un solo estandarte de guerra, la mayoría de sus integrantes no han conocido nunca la derrota en combate.");
    stmt.run("Grunt", 0, 0, "Infantería media y tenaz de las fuerzas pantanosas, expertas en terrenos boscosos y pantanos. Avanza sin piedad tras su robusto escudo.");
    stmt.run("Potionmaster", 0, 0, "Salidos de la universidad del reino enemigo, estos excéntricos maestros que lanzan brebajes tóxicos y líquidos explosivos fabricados en su laboratorio al enemigo.");
    stmt.run("Commander", 0, 0, "Estrategas y guerreros brillantes que coordinan los ataques tácticos desde la retaguardia del campo de batalla, cuando la situación se torna complicada en el campo de batalla, estos se lanzan a la batalla.");
    stmt.run("Guardian", 0, 0, "Se habla mucho de estos colosos escamosos y nada bueno, entre tantas, nunca nadie ha conseguido a alguno de ellos, se dice que no existen mas de 5.");
    stmt.run("Weasel Fisher", 0, 0, "Pescadores que han adaptado su arpón dentado para lanzarlo a distancia media al enemigo.");
    stmt.run("Newt Slinger", 0, 0, "Pequeños y equipados con un tirachinas, se camuflaran con el entorno y se subiran en arboles para lanzar su ataques a distancia. ");
    stmt.run("Turtle King", 0, 0, "Monarca absoluto de las profundidades. Su caparazón es más resistente que el acero templado. Rey del reino enemigo y valiente guerrero.");

    stmt.finalize();

    console.log("¡ÉXITO! Se han borrado los datos antiguos y se han cargado los 11 enemigos nuevos.");
});

db.close();