require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('response for twitter')
})

app.get('/login', (req, res) => {
res.send('<h1>please login</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>Youtube</h1>')
})

console.log(process.env.PORT)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})  


