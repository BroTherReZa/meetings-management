const mongoose = require('mongoose')


const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: { type: String, required: true},
    position: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    invitations: [{type: mongoose.Types.ObjectId, required: true, ref: 'Invitation'}],
})

module.exports = mongoose.model('Contact', contactSchema)
