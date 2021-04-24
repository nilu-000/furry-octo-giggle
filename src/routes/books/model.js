const fetch = require('../../lib/pool');

module.exports = {
    getAll: async () => {
        const {rows} = await fetch(`SELECT b.id, b.name, a.fullname FROM books b 
                    JOIN book_author ba ON b.id=ba.book_id
                    JOIN authors a ON a.id=ba.author_id`);
        return rows;
    },
    getOne: async (id) => {
        const {rows} = await fetch(`SELECT b.id, b.name, a.fullname FROM books b 
                    JOIN book_author ba ON b.id=ba.book_id
                    JOIN authors a ON a.id=ba.author_id
                    WHERE b.id=$1`, id);
        return rows;
    }
}