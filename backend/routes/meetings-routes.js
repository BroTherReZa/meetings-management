const express = require('express')
const router = express.Router()

//controllers
const meetingsControllers = require('../controllers/meetings-controllers')



router.get('/',meetingsControllers.getMeetings)
router.get('/:mid',meetingsControllers.getMeetingById)

router.post('/', meetingsControllers.createMeeting)

router.delete('/:mid', meetingsControllers.deleteMeeting)

module.exports = router