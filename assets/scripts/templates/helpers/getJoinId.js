const store = require('../../store')
const getJoinId = (heroId, arr) => {
  let joinId
  const joins = arr.data.root.thing
  // console.log(joins)
  // console.log(heroId)
  joins.forEach(entry => {
    if (entry.user.id === store.user.id &&
      entry.hero.id === heroId) {
      joinId = entry.id
    }
  })
  // console.log(joinId)
  return joinId
}

module.exports = getJoinId
