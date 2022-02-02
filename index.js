const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8080
const messageService = require('./services/message.js')
const routesController = require('./routes/v1')()

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: messageService.getUserMessage('GET')
  })
})

app.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: messageService.getUserMessage('POST')
  })
})

app.use(express.json())
app.use('/api/v1', routesController)


app.listen(port, () => {
  console.log("Server running on port:", port)
})