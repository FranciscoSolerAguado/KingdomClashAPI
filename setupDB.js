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

    stmt.run("Guard", 0, 0, "Guardia base del ejército reptiliano. Equipado con armadura ligera y espada corta, patrulla las fronteras del reino buscando incautos. Aunque su entrenamiento es básico, su inquebrantable lealtad a la corona escamosa lo convierte en un obstáculo constante para cualquier aventurero que se adentre en el pantano.");

    stmt.run("Ratcher", 0, 0, "Meticuloso y escurridizo, este roedor ha sido entrenado en el antiguo arte del subterfugio. Prefiere atacar desde las sombras y saquear los suministros de las caravanas antes que enfrentarse en un combate abierto. Su agilidad y reflejos son su mayor defensa.");

    stmt.run("Elite", 0, 0, "Veterano de incontables escaramuzas fronterizas. El soldado de élite porta una armadura pesada forjada en las forjas ardientes de las profundidades. Su destreza técnica con la espada larga es temida en toda la región, y solo los guerreros más experimentados logran sobrevivir a su embate frontal.");

    stmt.run("Boss", 0, 0, "Un líder despiadado que ha unificado a las tribus salvajes bajo un solo estandarte de guerra. Su fuerza bruta y el manejo de su enorme espadón mellado son capaces de partir escudos pesados por la mitad. Las leyendas locales afirman que jamás ha conocido la derrota en un duelo a muerte.");

    stmt.run("Grunt", 0, 0, "Infantería pesada y tenaz de las fuerzas pantanosas. Formando la primera línea de choque con su robusto escudo y su lanza, avanza sin piedad. Es lento y de movimientos predecibles, pero su piel naturalmente gruesa y su determinación ciega lo hacen extremadamente difícil de derribar.");

    stmt.run("Potionmaster", 0, 0, "Un alquimista excéntrico corrompido por sus propios y oscuros experimentos. En lugar de curar, ahora destila brebajes tóxicos y líquidos explosivos. Su túnica siempre huele a azufre y químicos volátiles, llevando consigo un arsenal de frascos letales listos para ser arrojados.");

    stmt.run("Commander", 0, 0, "Estratega brillante y líder nato de las legiones anfibias. Desde la retaguardia del campo de batalla, coordina los ataques tácticos y mantiene inquebrantable la moral de sus tropas. Su armadura altamente ornamentada demuestra su estatus nobiliario y su maestría con las espadas gemelas.");

    stmt.run("Guardian", 0, 0, "Un coloso escamoso que ha jurado proteger los lugares sagrados y las ruinas antiguas del reino. Armado con una pesada lanza de doble punta, su estilo de combate es puramente defensivo e impenetrable. Prefiere desgastar al enemigo antes de asestar un único y letal golpe final.");

    stmt.run("Weasel Fisher", 0, 0, "Un astuto pescador de río que ha tenido que adaptar sus herramientas de trabajo diarias para la guerra. Su arpón dentado no solo sirve para capturar las escurridizas presas del agua, sino que ahora es un arma mortal capaz de ensartar intrusos a media distancia con una precisión envidiable.");

    stmt.run("Newt Slinger", 0, 0, "Batracio ágil y resbaladizo, especializado en tácticas de guerrilla y combate a distancia. Utiliza una honda primitiva, pero sorprendentemente letal, para lanzar proyectiles perforantes recubiertos de toxinas. Suele esconderse en la maleza alta para emboscar a sus víctimas sin ser visto.");

    stmt.run("Turtle King", 0, 0, "El monarca absoluto e indiscutible de las profundidades acuáticas. Su ancestral caparazón es más resistente que el acero templado, y su tridente mágico es capaz de canalizar el poder destructivo de las mareas. Desafiar su autoridad es enfrentarse directamente a la furia incontrolable del océano.");

    stmt.finalize();

    console.log("¡Base de datos 'Bestiario.db' creada y poblada con éxito!");
});

db.close();