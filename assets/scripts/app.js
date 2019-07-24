'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./events/auth/authEvents')
const heroEvents = require('./events/heroes/heroEvents')
const modalEvents = require('./events/modalEvents')

$(() => {
  // your JS code goes here

  // MODAL EVENTS
  $('.logIn').on('click', modalEvents.openLogin)
  $('.homePageSignUp').on('click', modalEvents.openSignUp)
  $('.signUp').on('click', modalEvents.openSignUp)

  // AUTH EVENTS
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.logOut').on('click', authEvents.onSignOut)
  heroEvents.addHandlers()
})
