const express = require('express')

const Article = require('../models/article')

const router = express.Router()
router.get('/', (req, res) => {
  Article.findAll()
    .then(articles => res.json(articles))
})

router.get('/:id', (req, res) => {
  Article.findById(req.params.id)
    .then(article => res.json(article))
})

module.exports = router
