const getFormFields = require('../../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetUsers = event => {
  event.preventDefault()
  api.getUsers()
    .then(ui.getProfilesSuccess)
    .catch(console.error)
}

// const onEditProfile = event => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.updateProfile(formData)
//     .then(console.log)
//     .catch(console.error)
// }

const onClickProfileTab = () => {
  api.getUserProfile()
    .then(ui.getProfileSuccess)
    .catch(console.error)
}

const onUpdateProfile = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateProfile(formData)
    .then(console.log)
    .catch(console.error)
  $('.modal').modal('hide')
  ui.updateProfileView(formData)
}

const onDeleteVideo = event => {
  event.preventDefault()
  const videoId = $('iframe').data('id')
  // console.log(videoId)
  api.deleteVideo(videoId)
    .then(console.log)
    .then(() => $('#deleteVideoPrompt').modal('hide'))
    .catch(console.error)
}

const onOpenModals = event => {
  const $target = $(event.target)
  if ($target.hasClass('edit-display-name')) {
    $('#newDisplayName').modal('show')
    $('#display-name').on('submit', onUpdateProfile)
    $('#newDisplayName').modal('hide')
  } else if ($target.hasClass('edit-summary')) {
    $('#newSummary').modal('show')
    $('#summary').on('submit', onUpdateProfile)
    $('#newSummary').modal('hide')
  } else if ($target.hasClass('edit-platform')) {
    $('#newPlatform').modal('show')
    $('#platform').on('submit', onUpdateProfile)
    $('#newPlatform').modal('hide')
  } else if ($target.hasClass('edit-region')) {
    $('#newRegion').modal('show')
    $('#region').on('submit', onUpdateProfile)
    $('#newRegion').modal('hide')
  } else if ($target.hasClass('edit-skill-rating')) {
    $('#newSkillRating').modal('show')
    $('#skill-rating').on('submit', onUpdateProfile)
    $('#newSkillRating').modal('hide')
  } else if ($target.hasClass('edit-video')) {
    $('#videoOptions').modal('show')
    $('#video-edit-option').on('click', openVideoOptions)
    $('#video-delete-option').on('click', openVideoDeleteOptions)
  }
}

const openVideoOptions = event => {
  $('#editVideoModal').modal('show')
  $('#videoOptions').modal('hide')
}

const openVideoDeleteOptions = event => {
  $('#deleteVideoPrompt').modal('show')
  $('#videoOptions').modal('hide')
  $('#delete-video').on('click', onDeleteVideo)
}

const onOpenRemoveHeroPrompt = event => {
  // console.log('Clicked!')
  // pass the API the id of the join table entry
  // in rails, pass in the two foreign keys
  $('#deleteHeroPrompt').modal('show')
  $('#delete-hero').on('click', () => {
    console.log('Byeeeeeeeeeee')
    $('#deleteHeroPrompt').modal('hide')
  })
}

const addHandlers = () => {
  $('#getPlayers').on('click', onGetUsers)
  $('body').on('click', '.editable', onOpenModals)
  $('body').on('click', '.hero-profile-icon', onOpenRemoveHeroPrompt)
}

module.exports = {
  addHandlers,
  // onEditProfile,
  onClickProfileTab,
  onUpdateProfile
}
