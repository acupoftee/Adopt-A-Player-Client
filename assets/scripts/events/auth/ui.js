const store = require('../../store')
const utils = require('../../util/utils')

const signUpSuccessful = () => {
  $('.sign-up-error').empty()
  $('.sign-in-error').empty()

  // close sign up modal
  $('#signUpModal').modal('hide')

  // open success modal
  $('.signUpSuccess').modal('show')

  // clear form
  $('form').trigger('reset')
}

const signUpFailure = () => {
  // clear form
  $('form').trigger('reset')

  // show error message
  $('.sign-up-error').html('Can\'t sign you up. 😞')
}

const signInSuccessful = responseData => {
  // hide error message if active on success
  $('.sign-in-error').empty()
  $('.sign-up-error').empty()

  // update the user's session info for later
  store.user = responseData.user

  // close sign in modal
  $('#signInModal').modal('hide')

  // Hide sign up text
  utils.hideItems('#login-tab')
  utils.hideItems('#sign-up-tab')

  // show sign in text
  utils.showItems('#logout-tab')
  utils.showItems('#profile')
  utils.showItems('#settings')

  utils.hideItems('.homePageSignUp')
  utils.hideItems('.intro-footer')

  // clear form
  $('form').trigger('reset')
}

const signInFailure = () => {
  // clear form
  $('form').trigger('reset')

  // show error message
  $('.sign-in-error').html('Can\'t sign you in. 😞')
}

const signOutSuccessful = () => {
  // show sign up text
  utils.showItems('#login-tab')
  utils.showItems('#sign-up-tab')
  utils.showItems('.homepage')

  // Hide options for signed in users
  utils.hideItems('#profile')
  utils.hideItems('#settings')
  utils.hideItems('#logout-tab')

  $('.hero-list').empty()

  utils.showItems('.homePageSignUp')
  utils.showItems('.intro-footer')
}

const signOutFailure = () => {
  utils.errorModal('Unable to sign you out at this time. Try again later!')
}

const changePasswordSuccessful = () => {
  $('#changePasswordModal').modal('hide')
  $('.newpassword').modal('show')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#changePasswordModal').modal('hide')
  $('.nopassword').modal('show')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  signOutSuccessful,
  signOutFailure,
  changePasswordSuccessful,
  changePasswordFailure
}
