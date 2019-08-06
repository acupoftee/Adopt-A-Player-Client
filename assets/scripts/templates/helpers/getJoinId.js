const store = require('../../store')

// This was made possible by the following:
// https://stackoverflow.com/questions/16783463/pass-array-written-in-template-to-meteor-handlebars-helper
const getJoinId = (heroId, arr) => {
  const joins = arr.data.root.thing

  const joinEntry = joins.find(entry => entry.user.id === store.user.id &&
    entry.hero.id === heroId)

  return joinEntry.id
}

module.exports = getJoinId
