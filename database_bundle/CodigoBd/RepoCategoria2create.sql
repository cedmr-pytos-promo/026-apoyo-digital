CREATE TABLE Categoria (
    id_categoria INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    descripcion VARCHAR(200)
);
