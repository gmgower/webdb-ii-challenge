// ? s17 create db-config.js under data

//? s18 get knex object from packeage
const knex = require('knex');

//? s19 get config object from knex file
const config = require('../knexfile.js');

//? s20 export and pass in config developemnt
module.exports = knex(config.development);