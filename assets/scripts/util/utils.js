'use strict'
const showLoadError = require('../templates/error-modals/error.handlebars')

const hideItems = itemName => {
  $(itemName).removeClass('active')
  $(itemName).addClass('hidden')
}

const showItems = itemName => {
  $(itemName).removeClass('hidden')
  $(itemName).addClass('active')
}

const removeBlanks = obj => {
  for (const key in obj) {
    if (obj[key] === '') {
      delete obj[key]
    }
  }
  return obj
}

const removeModalBackdrop = () => {
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

// https://stackoverflow.com/questions/28735459/how-to-validate-youtube-url-in-client-side-in-text-box
const validateUrl = url => {
  if (url !== undefined || url !== '') {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    if (match && match[2].length === 11) {
      return true
    }
  }
  return false
}

const validateImageUrl = url => {
  return (url.match(/\.(jpeg|jpg|png)$/) !== null)
}

const errorModal = text => {
  const failureModalHtml = showLoadError()
  $('.errors').html(failureModalHtml)
  $('.modal-error-message').html(text)
  $('#loadError').modal('show')
}

module.exports = {
  hideItems,
  showItems,
  removeBlanks,
  removeModalBackdrop,
  validateUrl,
  validateImageUrl,
  errorModal
}
