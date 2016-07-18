const pg = require('pg')

const config = {
  user: process.env.DB_USER,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 10,
  idleTimeoutMillis: 30000,
}

const pool = new pg.Pool(config)

module.exports = pool
