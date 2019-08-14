const _ = require('underscore')
const getFormFields = require('../../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../../store')
const heroIds = require('../heroes/getHeroIds')
const utils = require('../../util/utils')
const avatars = require('./randomAvatar')
const mentorStatus = require('./getStatus')

const openVideoOptions = event => {
  $('#editVideoModal').modal('show')
  $('#videoOptions').modal('hide')
}

const onClickLogo = event => {
  $('.hero-list').empty()
  utils.showItems('.homepage')
}

const openVideoDeleteOptions = () => {
  $('#deleteVideoPrompt').modal('show')
  $('#videoOptions').modal('hide')
  $('#delete-video-yes').on('click', onDeleteVideo)
}

const onOpenRemoveHeroPrompt = event => {
  store.heroId = $(event.target).data('id')
  $('#deleteHeroPrompt').modal('show')
  $('#delete-hero').on('click', onDeleteHero)
}

const onGetUsers = event => {
  event.preventDefault()
  api.getUsers()
    .then(ui.getProfilesSuccess)
    .then(() => utils.hideItems('.homepage'))
    .catch(ui.getProfilesFailure)
}

const onClickProfileTab = event => {
  // the user's data and general join table data is saved in a general object
  // This is going to be passed into our profile handlebars file
  store.profileData = {}

  // get the user profile, and then add their info into data
  api.getUserProfile()
    .then(res => {
      store.profileData.user = res
      if (!store.profileData.user.user.avatar_url) {
        const avatar = avatars.getAvatar()
        const data = {
          user: {
            avatar_url: avatar
          }
        }
        store.profileData.user.user.avatar_url = avatar
        onUpdateAvatar(data)
      }
    })
    .then(() => {
      // 1. get all the join table data
      // 2. share the profile and join table info to handlebars
      api.getUserHeroJoins()
        .then(res => {
          store.profileData.joins = res
        })
        .then(() => {
          ui.getProfileSuccess(store.profileData)
        })
        .then(() => utils.hideItems('.homepage'))
    })
    .catch(ui.getProfileFailure)
}

const onUpdateProfile = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  if (formData.user.is_mentor) {
    const key = formData.user.is_mentor
    formData.user.is_mentor = mentorStatus[key]
  } else if (formData.user.avatar_url && !utils.validateImageUrl(formData.user.avatar_url)) {
    $('.avatar-error').html('Avatar URL Invalid. Please use a .jpeg, .jpg, or .png file!')
    setTimeout(() => {
      $('.avatar-error').empty()
    }, 3000)
  } else {
    api.updateProfile(formData)
      .then(() => {
        $('.modal').modal('hide')
        ui.updateProfileView(formData)
      })
      .catch(() => utils.errorModal('Can\'t create avatar at this time.'))
  }
}

const onUpdateAvatar = data => {
  api.updateProfile(data)
    .then(true)
    .catch(() => utils.errorModal('Can\'t create avatar at this time.'))
}

const onUpdateVideo = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  if (formData.video.url !== '' && !utils.validateUrl(formData.video.url)) {
    $('.video-error').html('Video URL Invalid')
    setTimeout(() => {
      $('.video-error').empty()
    }, 3000)
  } else {
    const video = utils.removeBlanks(formData.video)
    const reqData = {
      video
    }
    api.updateVideo(reqData)
      .then(() => onClickProfileTab(event))
      .then(() => {
        $('#editVideModal').modal('hide')
        utils.removeModalBackdrop()
      })
      .catch(() => utils.errorModal('Can\'t update video at this time.'))
  }
}

const onAddVideo = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.video.user_id = store.user.id
  if (!utils.validateUrl(formData.video.url)) {
    $('.add-video-error').html('Video URL Invalid')
    setTimeout(() => {
      $('.add-video-error').empty()
    }, 3000)
  } else {
    api.addVideo(formData)
      .then(() => onClickProfileTab(event))
      .then(() => {
        $('#addVideModal').modal('hide')
        utils.removeModalBackdrop()
      })
      .catch(() => utils.errorModal('Can\'t add video at this time.'))
  }
}

const onAddHero = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const heroId = (_.invert(heroIds))[formData.hero.name]

  const userHero = {
    user_hero: {
      hero_id: heroId,
      user_id: store.user.id
    }
  }

  api.addUserHero(userHero)
    .then(() => {
      onClickProfileTab(event)
    })
    .then(() => {
      $('#addHeroModal').modal('hide')
      utils.removeModalBackdrop()
    })
    .catch(() => utils.errorModal('Can\'t add hero at this time.'))
}

const onDeleteVideo = event => {
  event.preventDefault()
  const videoId = store.videoId
  api.deleteVideo(videoId)
    .then(() => onClickProfileTab(event))
    .then(() => {
      $('#deleteVideoPrompt').modal('hide')
      utils.removeModalBackdrop()
    })
    .catch(() => utils.errorModal('Can\'t delete video at this time.'))
}

const onDeleteHero = event => {
  event.preventDefault()
  const heroId = store.heroId
  api.deleteHero(heroId)
    .then(() => {
      $('#deleteHeroPrompt').modal('hide')
      utils.removeModalBackdrop()
    })
    .then(() => {
      onClickProfileTab(event)
    })
    .catch(() => utils.errorModal('Can\'t delete hero at this time.'))
}

const onOpenOutsideProfile = event => {
  const userId = $(event.target).data('id')
  if (store.user && userId === store.user.id) {
    onClickProfileTab()
  } else {
    api.getOutsideUserProfile(userId)
      .then(ui.getOutsideProfileSuccess)
      .catch(() => utils.errorModal('Can\'t load at this time.'))
  }
}

const onOpenModals = event => {
  const $target = $(event.target)
  if ($target.hasClass('edit-display-name')) {
    $('#newDisplayName').modal('show')
    $('#display-name').on('submit', onUpdateProfile)
    $('#newDisplayName').modal('hide')
  } else if ($target.hasClass('edit-avatar')) {
    $('#newAvatar').modal('show')
    $('#avatar').on('submit', onUpdateProfile)
    $('#newAvatar').modal('hide')
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
  } else if ($target.hasClass('edit-mentor')) {
    console.log('mentor clicked')
    $('#newStatus').modal('show')
    $('#is-mentor').on('submit', onUpdateProfile)
    $('#newStatus').modal('hide')
  } else if ($target.hasClass('edit-video')) {
    store.videoId = $target.data('id')
    $('#videoOptions').modal('show')
    $('#video-edit-option').on('click', openVideoOptions)
    $('#video-update').on('submit', onUpdateVideo)
    $('#video-delete-option').on('click', openVideoDeleteOptions)
  } else if ($target.hasClass('add-video-option')) {
    $('#addVideoModal').modal('show')
    $('#add-video').on('submit', onAddVideo)
  } else if ($target.hasClass('add-hero-option')) {
    $('#addHeroModal').modal('show')
    // https://stackoverflow.com/questions/2888446/get-the-selected-option-id-with-jquery
    $('#add-hero').on('submit', onAddHero)
  }
}

const addHandlers = () => {
  $('#getPlayers').on('click', onGetUsers)
  $('body').on('click', '.editable', onOpenModals)
  $('body').on('click', '.hero-profile-icon-close', onOpenRemoveHeroPrompt)
  $('body').on('click', '.hero-profile-icon', onOpenRemoveHeroPrompt)
  $('body').on('click', '.profile-card', onOpenOutsideProfile)
}

module.exports = {
  addHandlers,
  onClickProfileTab,
  onUpdateProfile,
  onClickLogo
}
