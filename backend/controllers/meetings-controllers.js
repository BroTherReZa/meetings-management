const HttpError = require('../models/http-error')

const meetings = [{
    id: "1",
    subject: "subject1",
    minute: "minute1",
    room: "room1"
},{
    id: "2",
    subject: "subject2",
    minute: "minute2",
    room: "room2"
}]

const getMeetings = (req, res, next)=>{
    console.log('get route test')
    res.json({message: meetings})
}

const getMeetingById = (req, res, next)=>{
    const meetingId = req.params.mid
    const meeting = meetings.find(m => {
        return m.id === meetingId
    })
    if(!meeting){
        return next(new HttpError('Not Found!',404))
    }
    res.json({message: meeting})
}

exports.getMeetingById = getMeetingById
exports.getMeetings = getMeetings