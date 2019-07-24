'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// const authEvents = require('./events/auth/authEvents')
const modalEvents = require('./events/modalEvents')

$(() => {
  // your JS code goes here

  // MODAL EVENTS
  $('.logIn').on('click', modalEvents.openLogin)
  $('.signUp').on('click', modalEvents.openSignUp)

  // AUTH event
  // $('#sign-up').on('submit', authEvents.onSignUp)
})
