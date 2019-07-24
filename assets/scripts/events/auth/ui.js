const store = require('../../store')
const utils = require('../../util/utils')

const signUpSuccessful = () => {
  // hide error message if it's active on success
  if ($('.sign-up-error').hasClass('active')) {
    utils.hideItems('.sign-up-error')
  }
  // close sign up modal
  $('#signUpModal').modal('hide')

  // clear form
  $('form').trigger('reset')
}

const signUpFailure = () => {
  // clear form
  $('form').trigger('reset')

  // show error message
  utils.showItems('.sign-up-error')
}

const signInSuccessful = responseData => {
  // hide error message if active on success
  if ($('.sign-up-error').hasClass('active')) {
    utils.hideItems('.sign-in-error')
  }
  // update the user's session info for later
  store.user = responseData.user

  // close sign in modal
  $('#signInModal').modal('hide')

  // Hide sign up text
  // $('#swap-link').text('Sign Out')
  // $('#swap-link').attr('class', 'logOut')
  // $('.logIn').html('')
  $('#login-tab').html('')
  $('#sign-up-tab').html('')
  $('#logout-tab').html('Sign Out')
  utils.hideItems('.intro-footer')
  $('.homePageSignUp').prop('value', 'Get Adopted')

  // clear form
  $('form').trigger('reset')
}

const signInFailure = () => {
  $('form').trigger('reset')
  utils.showItems('.sign-in-error')
}

const signOutSuccessful = () => {
  // Hide sign up text
  $('#login-tab').html('Sign In')
  $('#sign-up-tab').html('Sign Up')
  $('#logout-tab').html('')

  utils.showItems('.intro-footer')
  $('.homePageLogin').css('visibility', 'visible')
}

const signOutFailure = () => {

}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  signOutSuccessful,
  signOutFailure
}
