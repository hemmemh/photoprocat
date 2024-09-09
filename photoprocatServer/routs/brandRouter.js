const Router = require('express')
const brandControllers = require('../controllers/brandController')
const router = new Router()


router.post('/',brandControllers.create)
router.post('/getAll',brandControllers.getAll)
router.post('/getOne',brandControllers.getOne)
router.post('/createMany',brandControllers.createMany)


module.exports = router