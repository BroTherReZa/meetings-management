const { validationResult } = require('express-validator')

const HttpError = require('../models/http-error')
const Meeting = require('../models/meeting')
const User = require('../models/user')


const getMeetings = async (req, res, next) => {
    let meetings
    try {
        meetings = await Meeting.find()
    } catch (err) {
        const error = new HttpError('not found any meetings', 500)
        return next(error)
    }
    res.json({ meetings: meetings.map( m => m.toObject({ getters: true }))})
}

const getMeetingById = async (req, res, next) => {
    const meetingId = req.params.mid
    let meeting
    try {
        meeting = await Meeting.findById(meetingId)
    } catch (err) {
        const error = new HttpError('Could not found any meeting', 500)
        return next(error)
    }
    if(!meeting){
        const error = new HttpError('Could not found any meeting', 500)
        return next(error)
    }
    res.json({ meeting: meeting.toObject({ getters: true})})
}

const createMeeting = async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        throw new HttpError('invalid input!', 422)
    }

    const {subject, host, minute, meetingRoom, meetingRoomAddress, meetingDate, meetingTime, creator} = req.body
    const createdMeeting = new Meeting({
        subject: subject,
        host: host,
        minute: minute,
        meetingRoom: meetingRoom,
        meetingRoomAddress: meetingRoomAddress,
        meetingDate: meetingDate,
        meetingTime: meetingTime,
        creator: creator,
    })


    let user
    try {
        user = await User.findById(creator)
    } catch (err) {
        const error = new HttpError('Finding user failed!', 500)
        return next(error)
    }
    if(!user){
        const error = new HttpError('Could not find a user!', 402)
        return next(error)
    }

    try {
        await createdMeeting.save()
        user.meetings.push(createdMeeting)
        await user.save()
    } catch (err) {
        const error = new HttpError('Creating Meeting failed!', 500)
        return next(error)
    }

    res.status(201).json({message: createdMeeting})
    
}

const deleteMeeting = async (req, res, next) => {
    const meetingId = req.params.mid
    let meeting
    try {
        meeting = await Meeting.findById(meetingId).populate('creator')
    } catch (err) {
        const error = new HttpError('could not find meeting', 500)
        return next(error)
    }
    try {
        await meeting.remove()
        meeting.creator.meetings.pull(meeting)
        await meeting.creator.save()
    } catch (err) {
        const error = new HttpError('could not remove meeting', 500)
        return next(error)
    }
    res.json({ message: 'post deleted!'})
}


exports.getMeetings = getMeetings
exports.getMeetingById = getMeetingById
exports.createMeeting = createMeeting
exports.deleteMeeting = deleteMeeting