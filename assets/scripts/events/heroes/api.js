'use strict'

const config = require('../../config')

const getHeroes = function () {
  return $.ajax({
    url: config.apiUrl + '/heros'
  })
}

// const deleteBook = function (bookId) {
//   return $.ajax({
//     url: config.apiUrl + '/books/' + bookId,
//     method: 'DELETE'
//   })
// }

module.exports = {
  getHeroes
  // deleteBook
}
