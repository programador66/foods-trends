import knex from "knex";

const connection = knex({
  client: 'mysql',
  connection: {
    host : 'mysqldb',
    user : 'root',
    password : '123456',
    database : 'food_trends',
    port: 3306,
    insecureAuth : true
  }
});

export default connection;
