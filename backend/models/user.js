const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true},
    department: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true, minlength: true},
    meetings: [{  type: mongoose.Types.ObjectId, required: true, ref: 'Meeting'}]
})

module.exports = mongoose.model('User', userSchema)