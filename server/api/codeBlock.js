const router = require('express').Router()
const {CodeBlock} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    CodeBlock.findAll()
    .then(users => res.json(users))
    .catch(next)
})

router.post('/', (req, res, next) => {
    CodeBlock.create({
        code: req.body.code
    })
    .then(block => res.json(block))
    .catch(next)
})