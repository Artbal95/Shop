const {Router} = require('express')
const router = Router()
const controller = require('../controller/controller')

router.get('/', controller.getHome);
router.get('/blog', controller.getBlog)


module.exports = router