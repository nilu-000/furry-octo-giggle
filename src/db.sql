CREATE DATABASE bookstore;
CREATE TABLE books(
    id SERIAL NOT NULL,
    name VARCHAR(32) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE authors(
    id SERIAL NOT NULL,
    fullname VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL UNIQUE,
    PRIMARY KEY(id)
);

CREATE TABLE book_author(
    CONSTRAINT book_id 
        FOREIGN KEY(id) REFERENCES books(id),
    CONSTRAINT author_id 
        FOREIGN KEY(id) REFERENCES authors(id)
);