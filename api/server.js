// ? s3
const express = require('express');
// ? s4
const helmet = require('helmet');
// ? s5
const carsRouter = require('../cars/cars-router.js');

// ? s6
const server = express();


// ? s7 middleware
server.use(helmet());
server.use(express.json());

// ? s8 routers
server.use('/api/cars', carsRouter);







//? s9
module.exports = server;