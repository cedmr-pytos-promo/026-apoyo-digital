CREATE TABLE Herramienta (
    id_herramienta INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    descripcion VARCHAR(200),
    enlace VARCHAR(200) NOT NULL,
    uso_recomendado VARCHAR(200),
    caracteristicas VARCHAR(200),
    id_tipo INTEGER NOT NULL,

    FOREIGN KEY (id_tipo)
        REFERENCES Tipo_Herramienta(id_tipo)
);
