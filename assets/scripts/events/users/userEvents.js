const getFormFields = require('../../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetUsers = event => {
  event.preventDefault()
  api.getUsers()
    .then(ui.getProfilesSuccess)
    .catch(console.error)
}

const onEditProfile = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateProfile(formData)
    .then(console.log)
    .catch(console.error)
}

const addHandlers = () => {
  $('#getPlayers').on('click', onGetUsers)
}
module.exports = {
  addHandlers,
  onEditProfile
}
