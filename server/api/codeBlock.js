const router = require('express').Router()
const {CodeBlock} = require('../db/models')
module.exports = router

router.get('/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.params.id)
    CodeBlock.findById(req.params.id)
    .then(code => res.json(code))
    .catch(next)
})

router.post('/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    CodeBlock.create({
        code: req.body.code,
        folderId: req.body.folderId,
        title: req.body.title,
        userId: req.params.id
    })
    .then(block => res.json(block))
    .catch(next)
})


// router.use((req, res, next) => {
//     const error = new Error('Not Found')
//     error.status = 404
//     next(error)
//   })