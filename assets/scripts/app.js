'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const modalEvents = require('./events/modalEvents')
$(() => {
  // your JS code goes here
  $('#logIn').on('click', modalEvents.openLogin)
})
