// Update with your config settings.
//? s14
// knex int creates knex file
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      // ? s15 route to db3
      filename: './data/cars.db3'
    },
    //? s16
    useNullAsDefault:true,

    //? s22 create codebase method to create database
    migrations: {
      //? s23 create migrations directory
      //? s24 terminal: knex 
      //? s25 terminal: npm knex migrate:make cars-schema
      directory: './data/migrations'
    }
  }
};
