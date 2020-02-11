const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(3009, ()=> {
    console.log('API running At localhost:3009')
})

mongoose.connect(`mongodb://localhost:27017/gazipDB`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection
  .once('open', () => console.log('Database is connected!'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });

app.get('/', (req, res) => {
    res.send("HELLO API GAZIP")
})