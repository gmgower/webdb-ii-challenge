
exports.up = function(knex) {
    // ? s26 knexjs.org
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.string('vin', 128).notNullable();
        tbl.string('make', 128).notNullable();
        tbl.string('model', 128).notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('transmission_type', 128);
        tbl.string('title_status', 128);
    })
  
};

exports.down = function(knex) {
    //? 27 
    return knex.schema.dropTableIfExists('cars');
  
};
//? 28 terminal: knex migrate:latest / creates cars.db3 under data
//? 29 check data in sqlLiteStudio
//? 30 check data in postman should be empty [] because there is no data
