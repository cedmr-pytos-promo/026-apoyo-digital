
CREATE TABLE Tipo_Herramienta (
    id_tipo INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    descripcion VARCHAR(200)
);
