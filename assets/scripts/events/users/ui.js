'use strict'

const showProfilesTemplate = require('../../templates/profile-listing.handlebars')

const showProfileTemplate = require('../../templates/profile.handlebars')

const showOutsideProfileTemplate = require('../../templates/another_user_profile.handlebars')

// const showHeroRefresh = require('../../templates/hero/hero_view.handlebars')

const getProfilesSuccess = data => {
  const showProfilesHtml = showProfilesTemplate({users: data.users})

  $('.hero-list').html(showProfilesHtml)
}

const getProfileSuccess = data => {
  const showProfileHtml = showProfileTemplate({user: data.user.user, thing: data.joins.user_heros})

  $('.hero-list').html(showProfileHtml)
}

const getOutsideProfileSuccess = data => {
  const showProfileHtml = showOutsideProfileTemplate({ user: data.user })

  $('.hero-list').html(showProfileHtml)
}

const updateHeroListings = data => {
  const showHeroHtml = showProfileTemplate({ user: data.user.user, thing: data.joins.user_heros })

  $('.hero-list').html(showHeroHtml)
}

const updateProfileView = formData => {
  const key = Object.keys(formData.user)[0]
  const updatedForm = formData.user
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
  $('form').trigger('reset')
}

module.exports = {
  getProfilesSuccess,
  getProfileSuccess,
  getOutsideProfileSuccess,
  updateProfileView,
  updateHeroListings
}
