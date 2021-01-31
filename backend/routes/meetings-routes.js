const express = require('express')
const router = express.Router()

//controllers
const meetingsControllers = require('../controllers/meetings-controllers')



router.get('/',meetingsControllers.getMeetings)
router.get('/:mid',meetingsControllers.getMeetingById)

module.exports = router