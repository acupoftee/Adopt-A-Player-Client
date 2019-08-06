'use strict'

const showProfilesTemplate = require('../../templates/profile-listing.handlebars')

const showProfileTemplate = require('../../templates/profile.handlebars')

const getProfilesSuccess = data => {
  const showProfilesHtml = showProfilesTemplate({users: data.users})

  $('.hero-list').html(showProfilesHtml)
}

const getProfileSuccess = (data) => {
  data.user.user.joins = data.joins.user_heros
  console.log(data.user.user.joins)
  const showProfileHtml = showProfileTemplate({user: data.user.user})

  $('.hero-list').html(showProfileHtml)
}

const updateProfileView = formData => {
  const key = Object.keys(formData.user)[0]
  const updatedForm = formData.user
  console.log('key', key)
  switch (key) {
    case 'display_name':
      $('.edit-display-name').html(updatedForm[key])
      break
    case 'summary':
      $('.edit-summary').html(updatedForm[key])
      break
    case 'platform':
      $('.edit-platform').html(updatedForm[key])
      break
    case 'region':
      $('.edit-region').html(updatedForm[key])
      break
    case 'skill_rating':
      $('.edit-skill-rating').html(updatedForm[key])
      break
  }
}

module.exports = {
  getProfilesSuccess,
  getProfileSuccess,
  updateProfileView
}
