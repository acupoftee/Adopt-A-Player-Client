'use strict'

const config = require('../../config')
const store = require('../../store')

const getUsers = () => {
  return $.ajax({
    url: config.apiUrl + '/users'
  })
}

const getUserHeroJoins = () => {
  return $.ajax({
    url: config.apiUrl + '/user_heros'
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

const getOutsideUserProfile = id => {
  return $.ajax({
    url: config.apiUrl + '/users/' + id
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

const addVideo = data => {
  return $.ajax({
    url: config.apiUrl + '/videos/',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateVideo = data => {
  return $.ajax({
    url: config.apiUrl + '/videos/' + store.videoId,
    data,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteHero = id => {
  return $.ajax({
    url: config.apiUrl + '/user_heros/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addUserHero = data => {
  return $.ajax({
    url: config.apiUrl + '/user_heros',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getUsers,
  updateProfile,
  updateVideo,
  getUserProfile,
  deleteVideo,
  deleteHero,
  addVideo,
  addUserHero,
  getUserHeroJoins,
  getOutsideUserProfile
}
