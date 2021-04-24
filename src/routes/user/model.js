const fetch = require('../../lib/pool');

module.exports = {
    getAll: async () => {
        const {rows} = await fetch(`SELECT * FROM users`);
        return rows;
    },
    getAdmins: async () => {
        const {rows} = await fetch(`SELECT * FROM users u JOIN admins a ON a.id=u.id`);
        return rows;
    },
    createUser: async(fullname, email, password) => {
        const {rows} = await fetch(`INSERT INTO users(fullname, email, password) 
                VALUES($1, $2, $3)`, fullname, email, password);
        return rows;
    },
    findUser: async(email, password) => {
        const {rows} = await fetch(`SELECT * FROM users WHERE email=$1 AND password=$2`, email, password);
        return rows;
    }
}