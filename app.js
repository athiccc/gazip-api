const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(4099, ()=> {
    console.log('API running At localhost:4099')
})

mongoose.connect(`mongodb://localhost:27017/testgzDB`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection
  .once('open', () => console.log('Database is connected!'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });

app.get('/', (req, res) => {
    res.send("HELLO API GAZIP")
})