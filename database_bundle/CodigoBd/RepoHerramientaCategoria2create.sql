CREATE TABLE Herramienta_Categoria (
    id_herramienta INTEGER NOT NULL,
    id_categoria INTEGER NOT NULL,
    PRIMARY KEY (id_herramienta, id_categoria),
	
    FOREIGN KEY (id_herramienta)
        REFERENCES Herramienta(id_herramienta)

    FOREIGN KEY (id_categoria)
        REFERENCES Categoria(id_categoria)
);
