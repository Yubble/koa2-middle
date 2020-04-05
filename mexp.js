const express = require('express')
const app = express()

app.use((res, req, next) => {
  req.json('hi express')
  next()
})

app.listen(3100)