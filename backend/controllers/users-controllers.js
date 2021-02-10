const { validationResult } = require('express-validator')

const HttpError = require('../models/http-error')
const User = require('../models/user')


const getUsers = async (req, res, next) => {
    let users
    try {
        users = await User.find({}, '-password')
    } catch (err) {
        const error = new HttpError('not found any user', 500)
        return next(error)
    }
    res.json({users: users.map( u => u.toObject({ getters: true }))})
}

const signUp = async (req, res, next) => {
    
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        throw new HttpError('invalid input!', 422)
    }

    const { name, department,email, password } = req.body
    let existingUser
    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        const error = new HttpError('signup failed', 500)
        return next(error)
    }
    if(existingUser){
        const error = new HttpError('user exist', 422)
        return next(error)
    }
    
    const createdUser = new User ({
        name: name,
        department: department,
        email: email,
        password: password,
        meetings: []
    })
    try {
        await createdUser.save()
    } catch (err) {
        const error = new HttpError('signup faild', 500)
        return next(error)
    }
    res.status(201).json({ user: createdUser.toObject({ getters: true }) })
}

const signIn = async (req, res, next) => {
    const { email, password } = req.body

    let existingUser
    try {
        existingUser = await User.findOne({email: email})
    } catch (err) {
        const error = new HttpError('login failed', 500)
        return next(error)
    }
    if(!existingUser || existingUser.password !== password){
        const error = new HttpError('invalid input', 401)
        return next(error)
    }
    
    res.json({ message: 'logged in', user: existingUser.toObject({ getters: true})} )
    
}

exports.getUsers = getUsers
exports.signUp = signUp
exports.signIn = signIn
