const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Folder = db.define('folder', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
      }
})


module.exports = Folder