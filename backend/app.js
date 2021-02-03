const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const meetingsRoute = require('./routes/meetings-routes')
const usersRoute = require('./routes/users-routes')
const HttpError = require('./models/http-error')

const app = express()


// - middlewares routes
app.use(bodyParser.json())

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    res.setHeader('Access-Control-Allow-Methods','*')
    next()
})


app.use("/api/meeting", meetingsRoute)
app.use('/api/user', usersRoute)

app.use((req, res, next)=>{
    const error = new HttpError('Not Found!', 404)
    throw error
})

// error handeling
app.use((error, req, res, next)=> {
    if(res.headerSet){
       return next(error)
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'Error'})
})

// DB connection
mongoose
.connect('mongodb://127.0.0.1:27017/mma2')
.then(()=>{
    console.log('DB Connected!')
    app.listen(5000)
})
.catch((err)=>{
    console.log('DB Connection failed!')
    console.log(err)
})
