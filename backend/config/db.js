import mysql from 'mysql2/promise';

const db = mysql.createPool({
    user:"root",
    host:"localhost",
    password:"asya.2003",
    port:3306,
    database:"categories-node",
});
console.log('mysql pool ready');

export default db;