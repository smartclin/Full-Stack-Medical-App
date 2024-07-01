// db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'drhazem',
  password: 'Health',
  host: 'localhost',
  port: 5432,
  database: 'smart',
});

const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
};

module.exports = { query };
