const {Router} = require('express')
const router = Router()
const controller = require('../controller/controller')

router.get('/', controller.getHome);


module.exports = router