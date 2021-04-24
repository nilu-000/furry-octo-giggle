const {Pool} = require('pg');
require('dotenv/config');


const pool = new Pool({
    host: "localhost",
    user: process.env.DB_USER,
    database: "bookstore",
    password: process.env.DB_PWD,
    port: 5432
});

async function fetch(query, ...params){
    const client = await pool.connect();

    try {
        const result = await client.query(query, params.length ? params: null);
        return result;
    } catch (err) {
        throw new Error("DATABASE: " + err)
    } finally {
        await client.release();
    }
}

module.exports = fetch;