const express = require('express')
const { infoV2Controller } = require('../../controllers')

const router = express.Router()

router.get('/info', infoV2Controller.info)

module.exports = router