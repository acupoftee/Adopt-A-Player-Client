'use strict'
const utils = require('../../util/utils')

const showHeroRosterTemplate = require('../../templates/hero-roster.handlebars')

const showHeroUserTemplate = require('../../templates/profile-listing.handlebars')

const getHeroRosterSuccess = data => {
  const showHeroRosterHtml = showHeroRosterTemplate({heros: data.heros})

  switch($('.hero-class').)

  $('.hero-list').html(showHeroRosterHtml)
}

const getHeroRosterFailure = () => {
  utils.errorModal('We\'re unable to load heroes at this time. Try again later!')
}

const getUsersByHeroSuccess = data => {
  if (data.hero.users.length === 0) {
    $('.hero-list').html('No one has played this hero yet!').css('color', 'white')
  } else {
    const showUsersByHeroHtml = showHeroUserTemplate({users: data.hero.users})
    $('.hero-list').html(showUsersByHeroHtml)
  }
}
module.exports = {
  getHeroRosterSuccess,
  getHeroRosterFailure,
  getUsersByHeroSuccess
}
