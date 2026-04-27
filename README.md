# 📖 Kingdom Clash API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

Este repositorio contiene el backend del **Bestiario** para el proyecto Kingdom Clash. La API actúa como un servidor de datos centralizado, permitiendo que el cliente del juego (Unity) consulte estadísticas, nombres y lore de los enemigos en tiempo real sin necesidad de tener la información hardcodeada en el código fuente del cliente.

## 🚀 Visión General

La arquitectura está diseñada para ser ligera y escalable:
* **Centralización:** Los cambios en las estadísticas de los enemigos se realizan en la base de datos y se reflejan automáticamente en el juego.
* **Documentación Interactiva:** Implementación de Swagger para pruebas rápidas de los endpoints.
* **Persistencia Ligera:** Uso de SQLite3 para un manejo eficiente de datos en un archivo local (`Bestiario.db`).

## 🛠️ Tecnologías Utilizadas

* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework Web:** [Express.js](https://expressjs.com/)
* **Base de Datos:** [SQLite3](https://www.sqlite.org/index.html)
* **Documentación:** [Swagger UI](https://swagger.io/tools/swagger-ui/)

## 📊 Modelo de Datos

La base de datos cuenta con una tabla principal denominada `enemigos`. Cada registro contiene los atributos necesarios para la lógica de combate y la interfaz de usuario del juego:

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | Integer | Identificador único autoincremental. |
| `nombre` | Text | Nombre oficial de la unidad enemiga. |
| `vida` | Integer | Puntos de salud base. |
| `dano` | Integer | Puntos de ataque/daño por golpe. |
| `descripcion` | Text | Texto de lore/información. |

## 📡 Endpoints (Rutas de Comunicación)

### 1. Obtener Bestiario Completo
* **URL:** `/enemigos`
* **Método:** `GET`
* **Descripción:** Recupera la lista completa de enemigos registrados en la base de datos.
* **Respuesta Exitosa (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "nombre": "Guard",
      "vida": 50,
      "dano": 10,
      "descripcion": "Regimiento base del ejército enemigo..."
    }
  ]
}
```

## ⚙️ Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/FranciscoSolerAguado/KingdomClashAPI.git](https://github.com/FranciscoSolerAguado/KingdomClashAPI.git)
    cd KingdomClashAPI
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Inicializar Base de Datos (Seed):**
    Ejecuta el script de configuración para crear la tabla y cargar los 11 enemigos base:
    ```bash
    node setupDB.js
    ```

4.  **Iniciar el servidor:**
    ```bash
    node index.js
    ```
    El servidor estará disponible en `http://localhost:3000`.

## 🎮 Flujo de Integración en Unity

Para integrar estos datos en el motor de juego, se sigue este flujo lógico:

1.  **Petición HTTP:** El script `BestiaryManager` en Unity realiza un llamado `GET` a la dirección del servidor.
2.  **Deserialización (Parseo):** La cadena JSON recibida se convierte a objetos de la clase `Enemigo` mediante `JsonUtility`.
3.  **Inyección en UI:**
    * Se generan botones dinámicos en el menú del Bestiario basados en la lista recibida.
    * Al seleccionar un enemigo, los campos `vida`, `dano` y `descripcion` se inyectan en componentes de **TextMeshPro**.
