'use strict'

const config = require('../../config')

const getHeroes = () => {
  return $.ajax({
    url: config.apiUrl + '/heros'
  })
}

const getUsersByHero = id => {
  return $.ajax({
    url: config.apiUrl + '/heros/' + id
  })
}

module.exports = {
  getHeroes,
  getUsersByHero
}
