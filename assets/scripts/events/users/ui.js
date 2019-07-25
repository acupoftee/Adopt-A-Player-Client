'use strict'

const showProfileTemplate = require('../../templates/profile-listing.handlebars')

const getProfilesSuccess = data => {
  console.log(data)

  const showProfilesHtml = showProfileTemplate({users: data.users})

  $('.hero-list').html(showProfilesHtml)
}

module.exports = {
  getProfilesSuccess
}
