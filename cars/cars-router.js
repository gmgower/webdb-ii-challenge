// ? s10
const express = require('express');

//? s21 import db 
const db = require('../data/db-config.js');

//? s12
const router = express.Router();

router.post('/', (req, res) => {
    const carData = req.body;
    // console.log("TCL: carData", carData)

    db('cars').insert(carData)    
    .then(ids => {
    // console.log("TCL: ids", ids)
        
        db('cars').where({id: ids[0]})
        // console.log("TCL: {id: ids[0]}", {id: ids[0]})
        
        .then(newCarEntry => {
        console.log("TCL: newCarEntry", newCarEntry)
            
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

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    db('cars').where({id}).update(changes)
    .then(carObjId => {
        if(carObjId) {
            db('cars')
            .where({id})
            .first()
            .then(carUpdateObj => {
                res.status(200).json(carUpdateObj)
            })
        } else {
            res.status(404).json({message: 'invalid id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Problem with database.'})
    })
 })

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    db('cars')
    .where({id})
    .del()
    .then(carObjId => {
    console.log("TCL: carObjId", carObjId)
        // if(carObjId) {
        // db('cars')
        // .where({id})  
        // .first()      
        // .then(carDeleteObj => {
        // console.log("TCL: carDeleteObj", carDeleteObj)
            
        // })
        // } else {
        //     res.status(404).json({message: 'invalid id.'})
        // }
        carObjId 
        ? res.status(200).json({deleted: carObjId})
        : res.status(404).json({message: 'Invalid ID'})        
    })
    .catch(err => {
        res.status(500).json({message: "Problem with the database."})
    })
})

// ? s13a
module.exports = router