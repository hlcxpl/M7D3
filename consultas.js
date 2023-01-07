const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'luispost',
    database: 'likeme',
    allowExitOnIdle: true
})

const verPost = async () => {
    const { rows } = await pool.query('SELECT * FROM posts');
    console.log(rows);
    return rows;
}

const agregarPost = async (titulo, img, descripcion) => {
    const consulta = "insert into posts values(default,$1,$2,$3)"
    const values = [titulo, img, descripcion]
    const result = await pool.query(consulta, values);
    console.log('Post Agregado');

}

module.exports = { verPost, agregarPost }