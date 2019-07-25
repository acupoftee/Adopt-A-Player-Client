'use strict'

const showProfilesTemplate = require('../../templates/profile-listing.handlebars')

const showProfileTemplate = require('../../templates/profile.handlebars')

const getProfilesSuccess = data => {
  const showProfilesHtml = showProfilesTemplate({users: data.users})

  $('.hero-list').html(showProfilesHtml)
}

const getProfileSuccess = data => {
  const showProfileHtml = showProfileTemplate({user: data.user})

  $('.hero-list').html(showProfileHtml)
}

module.exports = {
  getProfilesSuccess,
  getProfileSuccess
}
