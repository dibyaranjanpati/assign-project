// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'myuser',
//   host: 'localhost',
//   database: 'mydatabase',
//   password: 'mypassword',
//   port: 5432,
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),

// };

// const { Pool } = require("pg");

// const pool = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

export default {
  query: (text, params) => pool.query(text, params),
};
