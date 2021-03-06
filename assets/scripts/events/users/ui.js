'use strict'
const utils = require('../../util/utils')

const showProfilesTemplate = require('../../templates/profile-listing.handlebars')

const showProfileTemplate = require('../../templates/profile.handlebars')

const showOutsideProfileTemplate = require('../../templates/another_user_profile.handlebars')

// const showHeroRefresh = require('../../templates/hero/hero_view.handlebars')

const getProfilesSuccess = data => {
  const showProfilesHtml = showProfilesTemplate({
    users: data.users.sort((a, b) => {
      const aSummaryLength = a.summary ? a.summary.length : 0
      const bSummaryLength = b.summary ? b.summary.length : 0
      return bSummaryLength - aSummaryLength
    })
  })

  $('.hero-list').html(showProfilesHtml)
}

const getProfilesFailure = () => {
  utils.errorModal('We\'re unable to load players at this time. Try again later!')
}

const getProfileSuccess = data => {
  const showProfileHtml = showProfileTemplate({ user: data.user.user, thing: data.joins.user_heros })

  $('.hero-list').html(showProfileHtml)
}

const getProfileFailure = () => {
  utils.errorModal('We\'re unable to load your profile at this time. Try again later!')
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
  console.log('Form key', key)
  const updatedForm = formData.user
  switch (key) {
    case 'avatar_url':
      $('.profile-pic-main').attr('src', updatedForm[key])
      break
    case 'display_name':
      $('.edit-display-name').html(updatedForm[key])
      $('.add-display-name').remove()
      $('.new-display-name').html(updatedForm[key])
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
    case 'is_mentor':
      $('.edit-mentor').html(updatedForm[key] ? 'mentor' : 'mentee')
      break
  }
  $('.pencil').html('✎')
  $('form').trigger('reset')
}

module.exports = {
  getProfilesSuccess,
  getProfilesFailure,
  getProfileSuccess,
  getProfileFailure,
  getOutsideProfileSuccess,
  updateProfileView,
  updateHeroListings
}
