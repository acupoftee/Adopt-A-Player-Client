'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./events/auth/authEvents')
const heroEvents = require('./events/heroes/heroEvents')
const modalEvents = require('./events/modalEvents')
// const profileEvents = require('./events/profile/events')
const userEvents = require('./events/users/userEvents')

$(() => {
  // your JS code goes here

  // MODAL EVENTS
  $('.logIn').on('click', modalEvents.openLogin)
  $('.homePageSignUp').on('click', modalEvents.openSignUp)
  $('.signUp').on('click', modalEvents.openSignUp)
  $('.editProfile').on('click', modalEvents.openEditProfile)
  $('.changePassword').on('click', modalEvents.openChangePassword)

  // AUTH EVENTS
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.logOut').on('click', authEvents.onSignOut)

  // PROFILE EVENTS
  // $('#new-profile').on('submit', userEvents.onEditProfile)
  $('.goToProfile').on('click', userEvents.onClickProfileTab)

  // https://stackoverflow.com/questions/9827095/is-it-possible-to-use-jquery-on-and-hover

  // HANDLEBAR EVENTS
  heroEvents.addHandlers()
  userEvents.addHandlers()
  //
  // $(window).on('scroll', event => {
  //   if ($('body').scrollTop < 1000) {
  //     $('.auth-options').css('background-color', 'transparent')
  //   } else {
  //     $('.auth-options').css('background-color', '#2b2b2b')
  //   }
  // })
})
