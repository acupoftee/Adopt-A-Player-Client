
const openLogin = () => {
  $('#signInModal').modal('show')
  $('#signUpModal').modal('hide')
}

const openSignUp = () => {
  $('#signUpModal').modal('show')
  $('#signInModal').modal('hide')
}

module.exports = {
  openLogin,
  openSignUp
}
