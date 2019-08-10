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
module.exports = {
  hideItems,
  showItems,
  removeBlanks,
  removeModalBackdrop
}
