const store = require('../../store')
const getJoinId = (heroId, arr) => {
  let joinId
  const joins = arr.data.root.thing
  joins.forEach(entry => {
    if (entry.user.id === store.user.id &&
      entry.hero.id === heroId) {
      joinId = entry.id
    }
  })
  return joinId
}

module.exports = getJoinId
