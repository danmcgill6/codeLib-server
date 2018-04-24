const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const CodeBlock = db.define('codeBlock', {
    code: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    salt: {
      type: Sequelize.STRING,
      // Making `.salt` act like a function hides it when serializing to JSON.
      // This is a hack to get around Sequelize's lack of a "private" option.
      get () {
        return () => this.getDataValue('salt')
      }

  }
})


module.exports = CodeBlock