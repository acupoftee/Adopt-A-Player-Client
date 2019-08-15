'use strict'
const utils = require('../../util/utils')

const showHeroRosterTemplate = require('../../templates/hero-roster.handlebars')

const showHeroUserTemplate = require('../../templates/profile-listing.handlebars')

const showHeroDescription = require('../../templates/hero/hero-description.handlebars')

const getHeroRosterSuccess = data => {
  const showHeroRosterHtml = showHeroRosterTemplate({heros: data.heros})
  $('.hero-list').html(showHeroRosterHtml)
}

const getHeroRosterFailure = () => {
  utils.errorModal('We\'re unable to load heroes at this time. Try again later!')
}

const getUsersByHeroSuccess = data => {
  const showHeroDescriptionHtml = showHeroDescription({hero: data.hero})
  const backButton = '</br><a class="back-hero-listings" href="#">Back to Hero Search</a>'
  if (data.hero.users.length === 0) {
    $('.hero-list').html(showHeroDescriptionHtml + '<p class="no-one">No one has played this hero yet!</p>' + backButton)
    $('.no-one').css('color', 'white')
    // $('.back-hero-listings').css('color', 'white')
  } else {
    const showUsersByHeroHtml = showHeroUserTemplate({users: data.hero.users})
    const heroHeading = `<h4 class="hero-heading">Showing Players who've played the hero <span>${data.hero.name}</span></h4>`
    $('.hero-list').html(showHeroDescriptionHtml + heroHeading + backButton + showUsersByHeroHtml)
  }
}
module.exports = {
  getHeroRosterSuccess,
  getHeroRosterFailure,
  getUsersByHeroSuccess
}
