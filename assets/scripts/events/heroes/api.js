'use strict'

const config = require('../../config')

const getHeroes = function () {
  return $.ajax({
    url: config.apiUrl + '/heros'
  })
}

module.exports = {
  getHeroes
}
