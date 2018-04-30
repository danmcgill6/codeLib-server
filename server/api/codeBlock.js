const router = require('express').Router()
const {CodeBlock} = require('../db/models')
module.exports = router

router.get('/:id', (req, res, next) => {
    console.log(req.params.id)
    CodeBlock.findById(req.params.id)
    .then(code => res.json(code))
    .catch(next)
})

router.post('/', (req, res, next) => {
    CodeBlock.create({
        code: req.body.code,
        rootFolderId: req.body.rootFolderId
    })
    .then(block => res.json(block))
    .catch(next)
})


// router.use((req, res, next) => {
//     const error = new Error('Not Found')
//     error.status = 404
//     next(error)
//   })