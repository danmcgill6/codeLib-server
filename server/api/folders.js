const router = require('express').Router()
const {Folder} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Folder.scope('populated').findAll({
        where:{
        isRoot: true
    }})
    .then(folders => res.json(folders))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    console.log('HITTTTTTT')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Folder.scope('populated').findById(req.params.id)
    .then(folders => res.json(folders))
    .catch(next)
})

router.get('/user/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Folder.scope('populated').findAll({
        where:{
            isRoot: true,
            userId: req.params.id
        }
    })
    .then(folders => res.json(folders))
    .catch(next)
})



router.post('/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Folder.create({
        title: req.body.title,
        folderId: req.body.folderId,
        isRoot: req.body.isRoot,
        userId: req.body.userId
    })
    .then(block => res.json(block))
    .catch(next)
})


router.delete('/:id', (req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Folder.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(block => res.send(202))
    .catch(next)
})