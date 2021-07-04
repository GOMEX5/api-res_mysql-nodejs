const { json } = require('express');
const conexion = require('../database/db');

exports.read = (req, res) => {
    conexion.query('SELECT * FROM books', (err, results) => {
        if (err) {
            res.json({menssage : err})
        }
        res.json(results)
    });
}

exports.create = (req, res) => {
    const data = req.body;
    conexion.query('INSERT INTO books SET ?', [data], (err, book) => {
        if (err) {
            res.json({menssage : err})
        }
        res.json({menssage : "book add"})
    })
}

exports.listar = (req, res) => {
    const { id } = req.params;
    conexion.query('SELECT * FROM books WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.json({menssage : err})
        }
        res.json(results[0])
    })
}

exports.update = (req, res) =>{
    const { id } = req.params;
    const newBook = req.body;
    conexion.query('UPDATE books SET ? WHERE id = ?', [newBook,id], (err, results) => {
        if (err) {
            res.json({menssage : err})
        }
        res.json({menssage : "book update"})
    })
}

exports.delete = (req, res) =>{
    const {id}  = req.params;
    conexion.query('DELETE FROM books WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.json({menssage : err})
        }
        res.json({menssage : "book delete"})
    })
}