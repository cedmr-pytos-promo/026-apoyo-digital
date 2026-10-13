CREATE TABLE Nivel_Educativo (
    id_nivel INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    descripcion VARCHAR(200)
);
