const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'helloworld'
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: 'user registered'
  })
})

app.listen(process.env.PORT || 8081)
