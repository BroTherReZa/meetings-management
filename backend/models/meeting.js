const mongoose = require('mongoose')

const Schema = mongoose.Schema

const meetingSchema = new Schema({
    subject: {type: String, required: true},
    host: {type: String, required: true},
    minute: {type: String, required: true},
    meetingRoom: {type: String, required: true},
    meetingRoomAddress: {type: String, required: true},
    meetingDate: {type: String, required: true},
    meetingTime: {type: String, required: true},
    invitations: [{type: mongoose.Types.ObjectId, required: true, ref: 'Invitation'}],
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User'}
})

module.exports = mongoose.model('Meeting', meetingSchema)