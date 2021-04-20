const fetch = require('../../lib/pool');

module.exports = {
    getAll: async () => {
        
        const {rows} = await fetch('SELECT * FROM book');
        const rows = 'rows here';
        return rows;
    },
    getOne: async (param) => {
        const {row} = await fetch('SELECT * FROM book WHERE id=$1', param);
        return row;
    }
}