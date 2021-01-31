const express = require('express')
const meetingsRoute = require('./routes/meetings-routes')

const app = express()

//middlewares
app.use("/api/meeting", meetingsRoute)
app.use((error, req, res, next)=> {
    if(res.headerSet){
       return next(error)
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'Error'})
})

app.listen(5000)