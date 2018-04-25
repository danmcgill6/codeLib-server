const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const CodeBlock = db.define('codeBlock', {
    code: {
      type: Sequelize.TEXT('long'),
      allowNull: false
    },
})


module.exports = CodeBlock