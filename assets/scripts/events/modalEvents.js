
const openLogin = () => {
  $('#signInModal').modal('show')
  $('#signUpModal').modal('hide')

  // $('#myModal').is(':visible');
  // $('#modal').modal('hide');

  // if ($('#signUpModal').is(':visible')) {
  //   setTimeout(() => {
  //     $('#signUpModal').modal('hide')
  //   }, 1000)
  // }
}

const openSignUp = () => {
  $('#signUpModal').modal('show')
  $('#signInModal').modal('hide')

  // if ($('#signInModal').is(':visible')) {
  //   setTimeout(() => {
  //     $('#signInModal').modal('hide')
  //   }, 1000)
  // }
}

module.exports = {
  openLogin,
  openSignUp
}
