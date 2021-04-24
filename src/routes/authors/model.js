const fetch = require('../../lib/pool');

module.exports = {
    getAll: async () => {
        const {rows} = await fetch(`SELECT a.id, a.fullname, a.email, b.name FROM authors a 
                    JOIN book_author ba ON a.id=ba.author_id
                    JOIN books b ON b.id=ba.book_id`);
        return rows;
    },
    getOne: async (id) => {
        const {rows} = await fetch(`SELECT a.id, a.fullname, a.email, b.name FROM authors a 
                    JOIN book_author ba ON a.id=ba.author_id
                    JOIN books b ON b.id=ba.book_id
                    WHERE a.id=$1`, id);
        return rows;
    }
}