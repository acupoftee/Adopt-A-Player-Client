const getFormFields = require('../../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetUsers = event => {
  event.preventDefault()
  api.getUsers()
    .then(ui.getProfilesSuccess)
    .catch(console.error)
}

const onEditProfile = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateProfile(formData)
    .then(console.log)
    .catch(console.error)
}

const onClickProfileTab = () => {
  api.getUserProfile()
    .then(ui.getProfileSuccess)
    .catch(console.error)
}

const onOpenModals = event => {
  const $target = $(event.target)
  if ($target.hasClass('edit-display-name')) {
    $('#newDisplayName').modal('show')
  } else if ($target.hasClass('edit-summary')) {
    $('#newSummary').modal('show')
  } else if ($target.hasClass('edit-platform')) {
    $('#newPlatform').modal('show')
  } else if ($target.hasClass('edit-region')) {
    $('#newRegion').modal('show')
  } else if ($target.hasClass('edit-platform')) {
    $('#newPlatform').modal('show')
  } else if ($target.hasClass('edit-skill-rating')) {
    $('#newSkillRating').modal('show')
  }
}

const addHandlers = () => {
  $('#getPlayers').on('click', onGetUsers)
  $('body').on('click', '.editable', onOpenModals)
}
module.exports = {
  addHandlers,
  onEditProfile,
  onClickProfileTab
}
