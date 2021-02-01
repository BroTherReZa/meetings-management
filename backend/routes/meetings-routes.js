const express = require('express')
const { check } = require('express-validator')

//controllers
const meetingsControllers = require('../controllers/meetings-controllers')

const router = express.Router()



router.get('/',meetingsControllers.getMeetings)
router.get('/:mid',meetingsControllers.getMeetingById)

router.post('/', [check('subject').not().isEmpty()],meetingsControllers.createMeeting)

router.delete('/:mid', meetingsControllers.deleteMeeting)

module.exports = router