const api = require('./api.js')
const ui = require('./ui.js')
const utils = require('../../util/utils')

const onGetHeroRoster = event => {
  event.preventDefault()
  api.getHeroes()
    .then(ui.getHeroRosterSuccess)
    .then(() => utils.hideItems('.homepage'))
    .catch(ui.getHeroRosterFailure)
}

const onGetUsersByHero = event => {
  event.preventDefault()
  const heroId = $(event.target).data()
  api.getUsersByHero(heroId.id)
    .then(ui.getUsersByHeroSuccess)
    .catch(() => utils.errorModal('Can\'t get players at this time.'))
}
const addHandlers = () => {
  $('#getHeroRoster').on('click', onGetHeroRoster)
  $('body').on('click', '.back-hero-listings', onGetHeroRoster)
  $('body').on('click', '.hero-card', onGetUsersByHero)
}

module.exports = {
  addHandlers
}
