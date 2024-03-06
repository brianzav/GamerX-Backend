CREATE TABLE users(
    id TEXT(255) NOT NULL,
    cpf TEXT NOT NULL,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    active TEXT NOT NULL,
    role TEXT NOT NULL,
    PRIMARY KEY (id(255))
);
