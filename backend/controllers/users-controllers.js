const HttpError = require('../models/http-error')
const uuid = require('uuid')
const { validationResult } = require('express-validator')


let users = [{
    id: 'u1',
    name: 'reza',
    email: 'brother_reza@yahoo.com',
    password: '1234'
},
{
    id: 'u2',
    name: 'ali',
    email: 'ali@yahoo.com',
    password: '123'
}]

const getUsers = (req, res, next) => {
    res.json({users: users})
}

const signUp = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        throw new HttpError('invalid input!', 422)
    }
    const { name, email, password} = req.body
    const createdUser = {
        id: uuid.v4(),
        name: name,
        email: email,
        password: password
    }
    users.push(createdUser)
    res.status(201).json({newUser: createdUser})
    
}
const login = (req, res, next) => {
    const { email, password } = req.body
    const validUser = users.find( u => u.email === email)
    if(!validUser || validUser.password !== password){
        const error = new HttpError('not a valid user', 401)
    }
    res.json({message: 'logged in'})
    
}

exports.getUsers = getUsers
exports.signUp = signUp
exports.login = login
