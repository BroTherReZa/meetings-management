const HttpError = require('../models/http-error')
const uuid = require('uuid')

let meetings = [{
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

const getMeetings = (req, res, next) => {
    res.json({message: meetings})
}

const getMeetingById = (req, res, next) => {
    const meetingId = req.params.mid
    const meeting = meetings.find(m => {
        return m.id === meetingId
    })
    if(!meeting){
        return next(new HttpError('Not Found!',404))
    }
    res.json({message: meeting})
}

const createMeeting = (req, res, next) => {
    const { meetingId,
        subject,
        host,
        minute,
        meetingRoom,
        meetingRoomAddress,
        meetingDate,
        meetingTime,
        participants,} = req.body
    const createdMeeting = {
        id: uuid.v4(),
        subject: subject,
        minute: minute
    }
    meetings.push(createdMeeting)
    res.status(201).json({message: createdMeeting})
    
}

const deleteMeeting = (req, res, next) => {
    const meetingId = req.params.mid
    const loadedMeetings = meetings.filter(m => m.id !== meetingId)
    if(!loadedMeetings){
        return next(new HttpError('Not Found any Meeting',404))
    }
    res.status(200).json({ message: 'post deleted!'})
}



exports.getMeetings = getMeetings
exports.getMeetingById = getMeetingById
exports.createMeeting = createMeeting
exports.deleteMeeting = deleteMeeting