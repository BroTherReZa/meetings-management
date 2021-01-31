const express = require('express')
const bodyParser = require('body-parser')

const meetingsRoute = require('./routes/meetings-routes')
const usersRoute = require('./routes/users-routes')
const HttpError = require('./models/http-error')

const app = express()


// - middlewares
app.use(bodyParser.json())
app.use("/api/meeting", meetingsRoute)
app.use('/api/user', usersRoute)

app.use((req, res, next)=>{
    const error = new HttpError('Not Found!', 404)
    throw error
})
// error handel
app.use((error, req, res, next)=> {
    if(res.headerSet){
       return next(error)
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'Error'})
})
// - middlewares


app.listen(5000)