const router = require('express').Router()
const {RootFolder} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    RootFolder.scope('populated').findAll()
    .then(folders => res.json(folders))
    .catch(next)
})

router.post('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    RootFolder.create({
        name: req.body.name
    })
    .then(block => res.json(block))
    .catch(next)
})