CREATE DATABASE bookstore;
CREATE TABLE books(
    id SERIAL NOT NULL,
    name VARCHAR(32) NOT NULL,
    isbn VARCHAR(32),
    PRIMARY KEY(id)
);

CREATE TABLE authors(
    id SERIAL NOT NULL,
    fullname VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL UNIQUE,
    PRIMARY KEY(id)
);

CREATE TABLE book_author(
    book_id SERIAL 
        REFERENCES books(id),
    author_id SERIAL 
        REFERENCES authors(id)
);

INSERT INTO books(name) VALUES('Dr.Sleep'),('Becoming'), ('Sputnik Sweetheart');
INSERT INTO authors(fullname, email) 
VALUES('Stephen King', 's.king@mail.com'),
    ('Michelle Obama', 'm.obama@mail.com'),
    ('Hakuri Murakami', 'murakami@mail.com');
INSERT INTO book_author(book_id, author_id) VALUES(1,1), (2,2), (3,3);


SELECT * FROM books b JOIN book_author ba ON b.id=ba.book_id
JOIN authors a ON a.id=ba.author_id;
SELECT * FROM users u JOIN admins a ON a.id=u.id;


CREATE TABLE users(
    id SERIAL NOT NULL,
    fullname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(128) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE admins(
    id SERIAL NOT NULL,
    admin_id SERIAL
        REFERENCES users(id),
    PRIMARY KEY(id)
);

