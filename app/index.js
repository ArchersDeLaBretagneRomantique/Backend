const express = require('express')
const http = require('http')
const https = require('https')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use('/api', routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res) => {
  res.status(err.status || 500).send(err.message)
})

http.createServer(app).listen(process.env.HTTP_PORT || 8000)
https.createServer(app).listen(process.env.HTTPS_PORT || 4430)
