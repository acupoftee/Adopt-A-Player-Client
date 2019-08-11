const getFormFields = require('../../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
  // onSignInAfterSignUp(formData)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}
//
// const onSignInAfterSignUp = formData => {
//   // const form = event.target
//   // const formData = getFormFields(form)
//   api.signIn(formData)
//     .then(ui.signInSuccessful)
//     .catch(ui.signInFailure)
// }

// const onOnBoarding = event => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.buildProfile(formData)
//     .then(console.log)
//     .catch(console.error)
// }

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
