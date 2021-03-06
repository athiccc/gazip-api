const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

// const newSchema = require('./model/new')
// const rawDataSchema = require('./model/raw-data')
// const resMsgSchema = require('./model/response-msg')
// const trendSchema = require('./model/trend')
const menuSchema = require('./model/menu')

const app = express()

app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(4099, ()=> {
    // console.log('API running At localhost:4099')
})

mongoose.connect(`mongodb://localhost:27017/loopback2`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection
// .once('open', () => console.log('Database is connected!'))
.on('error', (error) => {
    // console.warn('Warning', error);
});

// const News = mongoose.model('new', newSchema)
// const Raws = mongoose.model('raw-data', rawDataSchema)
// const ResMsg = mongoose.model('response-message', resMsgSchema)
// const Trends = mongoose.model('trend', trendSchema)
const Menu = mongoose.model('menu', menuSchema)


const getIngredientByNo = async(num) => {
    const data = await Menu.findOne({ no: num })
    return data.name
}


///// Menu
////////
app.get('/api/randomMenu', async(req, res) => {
    const rand1 = Math.floor(Math.random() * 10)
    const rand2 = Math.floor(Math.random() * 10) + 10
    const rand3 = Math.floor(Math.random() * 10) + 20
    const rand4 = Math.floor(Math.random() * 10) + 30

    const ingre1 = await getIngredientByNo(rand1)
    const ingre2 = await getIngredientByNo(rand2)
    const ingre3 = await getIngredientByNo(rand3)
    const ingre4 = await getIngredientByNo(rand4)

    const menu = `${ingre1}${ingre2}ใส่${ingre3}ผสม${ingre4}`
    res.send({ randMenu: menu})
})

app.post('/api/createIngred', async(req, res) => {
    const data = await Menu.create(req.body)
    res.send(data)
})

////// news
//////////
// app.get('/api/news', async(req, res) => {
//     const query = req.query.title ? { title: { $regex: req.query.title, $options: 'i' } } : {}
//     const data = await News.find(query).sort({ createdAt: -1 })
//     res.send(data)
// })

// app.post('/api/news', async(req, res) => {
//     const data = await News.create(req.body)
//     res.send(data)
// })

// app.patch('/api/news', async(req, res) => {
//     const data = await News.updateOne({ _id: req.body.id }, { $set: req.body })
//     res.send(data)
// })

// app.delete('/api/news', async(req, res) => {
//     const data = await News.findOneAndDelete({ _id: req.body.id })
//     res.send(data)
// })

////// raw-data
//////////
// app.get('/api/raw-data', async(req, res) => {
//     const query = req.query.title ? { title: { $regex: req.query.title, $options: 'i' } } : {}
//     const data = await Raws.find(query)
//     res.send(data)
// })

// app.get('/api/ask-rumors', async(req, res) => {
//     const query = req.query.title ? { title: { $not: { $regex: req.query.title, $options: 'i' } } } : {}
//     const data = await Raws.find(query)
//     const randInt = Math.floor(Math.random() * Math.floor(data.length))
//     res.send(data[randInt])
// })

// app.get('/api/rumors', async(req, res) => {
//     const data = await Raws.create({ title: req.query.title, description: req.query.description })
//     res.send(data)
// })

// app.post('/api/raw-data', async(req, res) => {
//     const data = await Raws.create(req.body)
//     res.send(data)
// })

// app.patch('/api/raw-data', async(req, res) => {
//     const data = await Raws.updateOne({ _id: req.body.id }, { $set: req.body })
//     res.send(data)
// })

// app.delete('/api/raw-data', async(req, res) => {
//     const data = await Raws.findOneAndDelete({ _id: req.body.id })
//     res.send(data)
// })

////// response-msg
//////////
// app.get('/api/res-msg', async(req, res) => {
//     const query = req.query.title ? { title: { $regex: req.query.title, $options: 'i' } } : {}
//     const data = await ResMsg.find(query)
//     if(data.length > 0){
//         const randInt = Math.floor(Math.random() * Math.floor(data.length))
//         res.send(data[randInt])
//     }else{
//         await Raws.create({ title: req.query.title, description: "บอทตอบไม่ได้" })
//         res.send({description: "เรื่องนี้เรายังไม่รู้เลยอ่ะ เดี๋ยวเราไปหาข่าวก่อน ><"})
//     }
// })

// app.post('/api/res-msg', async(req, res) => {
//     const data = await ResMsg.create(req.body)
//     res.send(data)
// })

// app.patch('/api/res-msg', async(req, res) => {
//     const data = await ResMsg.updateOne({ _id: req.body.id }, { $set: req.body })
//     res.send(data)
// })

// app.delete('/api/res-msg', async(req, res) => {
//     const data = await ResMsg.findOneAndDelete({ _id: req.body.id })
//     res.send(data)
// })

////// trend
//////////
// app.get('/api/trend', async(req, res) => {
//     const query = req.query.name ? { name: { $regex: req.query.title, $options: 'i' } } : {}
//     const data = await Trends.find(query)
//     res.send(data)
    
// })

// app.post('/api/trend', async(req, res) => {
//     const data = await Trends.create(req.body)
//     res.send(data)
// })

// app.patch('/api/trend', async(req, res) => {
//     const data = await Trends.updateOne({ _id: req.body.id }, { $set: req.body })
//     res.send(data)
// })

// app.delete('/api/trend', async(req, res) => {
//     const data = await Trends.findOneAndDelete({ _id: req.body.id })
//     res.send(data)
// })