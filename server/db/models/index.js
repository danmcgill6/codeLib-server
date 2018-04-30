const User = require('./user')
const CodeBlock = require('./codeBlock')
const  Folder = require('./folder')
const  RootFolder = require('./rootFolder')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
RootFolder.hasMany(CodeBlock)
RootFolder.hasMany(Folder)

Folder.belongsTo(Folder)
Folder.belongsTo(RootFolder)
Folder.hasMany(Folder)
Folder.hasMany(CodeBlock)

CodeBlock.belongsTo(Folder)
CodeBlock.belongsTo(RootFolder)


module.exports = {
  User,
  CodeBlock,
  RootFolder,
  Folder
}
