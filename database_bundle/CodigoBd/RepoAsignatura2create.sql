CREATE TABLE Asignatura (
    id_asignatura INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    descripcion VARCHAR(200)
);
