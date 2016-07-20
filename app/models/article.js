const Sequelize = require('sequelize')

const database = require('../database')

const Article = database.define('article', {
  content: {
    type: Sequelize.STRING,
    field: 'content',
  },
})

module.exports = Article
