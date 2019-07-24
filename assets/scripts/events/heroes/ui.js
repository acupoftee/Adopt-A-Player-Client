'use strict'

const showHeroRosterTemplate = require('../../templates/hero-roster.handlebars')

const getHeroRosterSuccess = data => {
  console.log(data)

  const showHeroRosterHtml = showHeroRosterTemplate({heros: data.heros})

  $('.hero-list').html(showHeroRosterHtml)
}

module.exports = {
  getHeroRosterSuccess
}
