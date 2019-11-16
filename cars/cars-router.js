// ? s10
const express = require('express');

//? s21 import db 
const db = require('../data/db-config.js');

//? s12
const router = express.Router();

router.post('/', (req, res) => {
    const carData = req.body;

    db('cars').insert(carData)
    .then(ids => {
        db('cars').where({id: ids[0]})
        .then(newCarEntry => {
            res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
        console.log('POST error', err);
        res.status(500).json({message: "Failed to store data", err})
    });
});


// ? s13
router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to retrieve fruits.', err})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    db('cars').where({id}).first()
    .then(car => {
        res.json(car);
    })
    .catch(err => {
        res.status(500).json({message: "Failed to retrieve car"})
    });
});




// ? s13a
module.exports = router