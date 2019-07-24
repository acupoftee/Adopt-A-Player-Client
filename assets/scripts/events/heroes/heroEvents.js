const api = require('./api.js')
const ui = require('./ui.js')

const onGetHeroRoster = (event) => {
  event.preventDefault()
  api.getHeroes()
    .then(ui.getHeroRosterSuccess)
    .catch(console.error)
}
const addHandlers = () => {
  $('#getHeroRoster').on('click', onGetHeroRoster)
}
module.exports = {
  addHandlers
}
