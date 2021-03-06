const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/code', require('./codeBlock'))
router.use('/folders', require('./folders'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
