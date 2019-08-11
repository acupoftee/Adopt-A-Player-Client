
const openLogin = () => {
  $('#signInModal').modal('show')
  $('#signUpModal').modal('hide')
}

const openSignUp = () => {
  $('#signUpModal').modal('show')
  $('#signInModal').modal('hide')
}

const openEditProfile = () => {
  $('#editProfileModal').modal({
    backdrop: 'static',
    keyboard: false,
    show: true
  })
}

const openChangePassword = () => {
  $('#changePasswordModal').modal('show')
}

module.exports = {
  openLogin,
  openSignUp,
  openEditProfile,
  openChangePassword
}
