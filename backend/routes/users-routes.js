const express = require('express')
const { check } = require('express-validator')

const userControllers = require('../controllers/users-controllers')

const router = express.Router()



router.get('/', userControllers.getUsers)
router.post('/signup',
    [
        check('email')
        .isEmail()
        .normalizeEmail()      
        .not().isEmpty()
        .isLength({min: 5})
    ], userControllers.signUp)
router.post('/login', userControllers.login)

module.exports = router


