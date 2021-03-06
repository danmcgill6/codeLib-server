const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Folder = db.define('folder', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isRoot:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
},
{
    scopes: {
      populated: () => ({
        include: [{all: true}]
      })
    }
  })


module.exports = Folder