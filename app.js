const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3009, ()=> {
    console.log('API running At localhost:3009')
})

app.get('/', (req, res) => {
    res.send("HELLO API GAZIP")
})