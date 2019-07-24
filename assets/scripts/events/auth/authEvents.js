const getFormFields = require('../../../../lib/get-form-fields.js')

const api = require('./api')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(console.log)
    .catch(console.error)
}

module.exports = {
  onSignUp
}
