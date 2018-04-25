const router = require('express').Router()
const {CodeBlock} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    CodeBlock.findById(req.body.id)
    .then(code => res.json(code))
    .catch(next)
})

router.post('/', (req, res, next) => {
    CodeBlock.create({
        code: req.body.code
    })
    .then(block => res.json(block))
    .catch(next)
})