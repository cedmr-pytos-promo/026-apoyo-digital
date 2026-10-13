CREATE TABLE Herramienta_Asignatura (
    id_herramienta INTEGER NOT NULL,
    id_asignatura INTEGER NOT NULL,
    PRIMARY KEY (id_herramienta, id_asignatura),

    FOREIGN KEY (id_herramienta)
        REFERENCES Herramienta(id_herramienta)

    FOREIGN KEY (id_asignatura)
        REFERENCES Asignatura(id_asignatura)
);
