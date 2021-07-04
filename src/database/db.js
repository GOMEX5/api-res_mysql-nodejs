const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_res'
});

conexion.connect((error)=>{
    if (error) {
        console.log('el error es:' + error);
        return
    }
    console.log('conectado a la DB');
});

module.exports = conexion;