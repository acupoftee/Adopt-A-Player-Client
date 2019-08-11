const api = require('./api.js')
const ui = require('./ui.js')
const utils = require('../../util/utils')

const onGetHeroRoster = event => {
  event.preventDefault()
  api.getHeroes()
    .then(ui.getHeroRosterSuccess)
    .then(() => utils.hideItems('.homepage'))
    .catch(console.error)
}

const onGetUsersByHero = event => {
  event.preventDefault()
  const heroId = $(event.target).data()
  api.getUsersByHero(heroId.id)
    .then(ui.getUsersByHeroSuccess)
    .catch(console.error)
}
const addHandlers = () => {
  $('#getHeroRoster').on('click', onGetHeroRoster)

  $('body').on('click', '.hero-image', onGetUsersByHero)
}

module.exports = {
  addHandlers
}
