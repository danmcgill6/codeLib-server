const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const CodeBlock = db.define('codeBlock', {
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },
    code: {
      type: Sequelize.JSON,
      allowNull: false
    },
})


module.exports = CodeBlock