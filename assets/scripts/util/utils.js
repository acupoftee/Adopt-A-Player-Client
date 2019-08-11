'use strict'

const hideItems = itemName => {
  $(itemName).removeClass('active')
  $(itemName).addClass('hidden')
}

const showItems = itemName => {
  $(itemName).removeClass('hidden')
  $(itemName).addClass('active')
}

// REFACTORED remove blank method
// removes any empty key/value pairs from a patch request
// that have an empty string as a value, e.g.
// { example: { title: 'thing', text: '' } } -> { example: { title: 'thing' } }
const removeBlanks = obj => {
  // we don't know the name of the object in `req`, so we'll apply this to
  // ALL objects in `req`
  for (const key in obj) {
    if (obj[key] === '') {
      // removes both the key and the value, preventing it from being updated
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
      // return 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1'
      return true
    }
  }
  return false
}

module.exports = {
  hideItems,
  showItems,
  removeBlanks,
  removeModalBackdrop,
  validateUrl
}
