const express = require('express')

const pg = require('../models/database')

const router = express.Router()
router.get('/', (req, res) => {
  pg.connect((err, client, done) => {
    if (err) {
      throw new Error('Error fetching db client from pool')
    }
    client.query('SELECT * FROM articles ORDER BY creation_date DESC;', (err, res) => {
      done()
      if (err) {
        throw new Error('Error running db query')
      }
      res.json(res)
    })
  })
})

module.exports = router
