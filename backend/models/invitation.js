const mongoose = require('mongoose')

const Schema = mongoose.Schema

const invitationSchema = new Schema({
    meeting: { type: mongoose.Types.ObjectId, required: true, ref: 'Meeting'},
    participant: { type: mongoose.Types.ObjectId, required: true, ref: 'Contact' },
    status: { type: String, required: true },
})

module.exports = mongoose.model('Invitation', invitationSchema)
