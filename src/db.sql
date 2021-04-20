CREATE DATABASE bookstore;
CREATE TABLE books({
    id VARCHAR(32) NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    PRIMARY KEY(id)
});

CREATE TABLE authors({
    id VARCHAR(32) NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL UNIQUE,
    PRIMARY KEY(id)
});

CREATE TABLE book_author({
    book_id int FOREIGN KEY REFERENCES book(id),
    author_id int FOREIGN KEY REFERENCES author(id)
});