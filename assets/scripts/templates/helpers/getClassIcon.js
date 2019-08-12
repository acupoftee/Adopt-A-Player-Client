const getClassIcon = heroClass => {
  switch (heroClass) {
    case 'Tank':
      return '🛡'
    case 'Support':
      return '🚑'
    case 'Damage':
      return '⚔️'
  }
}

module.exports = getClassIcon
