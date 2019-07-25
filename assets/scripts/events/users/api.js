'use strict'

const config = require('../../config')

const getUsers = function () {
  return $.ajax({
    url: config.apiUrl + '/users'
  })
}

module.exports = {
  getUsers
}
