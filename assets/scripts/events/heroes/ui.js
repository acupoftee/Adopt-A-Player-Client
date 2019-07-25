'use strict'

const showHeroRosterTemplate = require('../../templates/hero-roster.handlebars')
const showHeroUserTemplate = require('../../templates/profile-listing.handlebars')

const getHeroRosterSuccess = data => {
  const showHeroRosterHtml = showHeroRosterTemplate({heros: data.heros})

  $('.hero-list').html(showHeroRosterHtml)
}

const getUsersByHeroSuccess = data => {
  if (data.hero.users.length === 0) {
    $('.hero-list').html('No one has played this hero yet!')
  } else {
    const showUsersByHeroHtml = showHeroUserTemplate({users: data.hero.users})
    $('.hero-list').html(showUsersByHeroHtml)
  }
}
module.exports = {
  getHeroRosterSuccess,
  getUsersByHeroSuccess
}
