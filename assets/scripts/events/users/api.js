'use strict'

const config = require('../../config')
const store = require('../../store')

const getUsers = () => {
  return $.ajax({
    url: config.apiUrl + '/users'
  })
}

const updateProfile = userData => {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user.id,
    data: userData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getUserProfile = () => {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user.id
  })
}

const deleteVideo = id => {
  return $.ajax({
    url: config.apiUrl + '/videos/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// const deleteHero = (userId, heroId) => {
//   return $.ajax({
//     url: config.apiUrl + '/userHero/' + store.user.id,
//     data: userData,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
module.exports = {
  getUsers,
  updateProfile,
  getUserProfile,
  deleteVideo
}
