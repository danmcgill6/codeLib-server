const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const RootFolder = db.define('rootFolder', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
      }
}, {
    scopes: {
      populated: () => ({
        include: [{all: true, nested: true}]
      })
    }
  })


module.exports = RootFolder