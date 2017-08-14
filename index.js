const express = require('express')
const app = express()
const fs = require('fs')

app.get('/api', (req, res) => {
  res.send(`${req.query.cb}({ data: 'fake data' })`)
})

app.listen(3000, '127.0.0.1', () => {
  console.log('Jsonp Demo listening on port 3000')
})
