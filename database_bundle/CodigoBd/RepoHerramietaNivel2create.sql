CREATE TABLE Herramienta_Nivel (
    id_herramienta INTEGER NOT NULL,
    id_nivel INTEGER NOT NULL,
    observaciones VARCHAR(200),
    PRIMARY KEY (id_herramienta, id_nivel),

    FOREIGN KEY (id_herramienta)
        REFERENCES Herramienta(id_herramienta)

    FOREIGN KEY (id_nivel)
        REFERENCES Nivel_Educativo(id_nivel)
);
